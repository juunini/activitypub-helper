import { type HTMLElement, parse } from 'node-html-parser';
import TurndownService from 'turndown';
import { writeFileSync } from 'fs'

const turndownService = new TurndownService({ })

fetch('https://www.w3.org/TR/activitystreams-vocabulary/')
  .then((response) => response.text())
  .then((html) => {
    const doc = parse(html)

    switch (process.argv[2]) {
      case 'core':
        crawlingCore(doc)
        break
      case 'properties':
        crawlingProperties(doc)
        break
      case 'activity':
        crawlingActivity(doc)
        break
      case 'actor':
        crawlingActor(doc)
      case 'object':
        crawlingObject(doc)
    }
  })

const crawlingCore = (doc: HTMLElement) => crawling(doc, "#types > table", "./src/vocabulary/core")
const crawlingProperties = (doc: HTMLElement) => crawling(doc, "#properties > table", "./src/vocabulary/properties")
const crawlingActivity = (doc: HTMLElement) => crawling(doc, "#activity-types > table", "./src/vocabulary/extended/activity", (contents: string, name: string) => {
  return `import type { Activity } from '../../core/Activity'

${contents.replace(`export type ${name} = any`, `export interface ${name} extends Activity {\n  type: '${name}'\n}`)}`
})
const crawlingActor = (doc: HTMLElement) => crawling(doc, "#actor-types > table", "./src/vocabulary/extended/actor")
const crawlingObject = (doc: HTMLElement) => crawling(doc, "#object-types > table", "./src/vocabulary/extended/object")

function crawling(html: HTMLElement, selector: string, path: string, contentsCallback?: (contents: string, name: string) => string) {
  const table = html.querySelector(selector)

  table?.querySelectorAll('tbody').forEach((tbody) => {
    const name = getName(tbody)
    const uri = getURI(tbody)
    const examples = getExamples(tbody)
    const notes = getNotes(tbody)
    const disjointWith = getDisjointWith(tbody)
    const range = getRange(tbody)
    const functional = getFunctional(tbody)
    const subproperty = getSubpropertyOf(tbody)
    const domain = getDomain(tbody)
    const _extends = getExtends(tbody)
    const properties = getProperties(tbody)

    let contents = `/**
 * ${notes.trim()}
 *
 * @see ${uri.trim()}${properties ? '\n * @properties ' + properties : ''}${_extends ? '\n * @extends ' + _extends : ""}${disjointWith ? '\n * @disjointWith ' + disjointWith : ""}${range ? '\n * @range ' + range : ""}${functional ? '\n * @functional ' + functional : ""}${subproperty ? '\n * @subproperty ' + subproperty : ""}${domain ? '\n * @domain ' + domain : ""}
 * @example
${examples.map((example) => ` * \`\`\`json\n * ${example}\n * \`\`\``).join("\n")}
 */
export type ${name === 'object' ? '_object' : name} = any\n`

    if (contentsCallback) {
      contents = contentsCallback(contents, name)
    }

    writeFileSync(`${path}/${name}.ts`, contents)
    writeFileSync(`${path}/index.ts`, `export type { ${name === 'object' ? '_object as object' : name} } from './${name}'\n`, { flag: 'a' })
})
}

const getName = (tbody: HTMLElement) => tbody.querySelector("tr:nth-child(1) > td:nth-child(1)")!.textContent
const getURI = (tbody: HTMLElement) => tbody.querySelector("tr:nth-child(1) > td:nth-child(3)")!.textContent
const getDisjointWith = (tbody: HTMLElement) => getContent(tbody, "Disjoint With:")
const getRange = (tbody: HTMLElement) => getContent(tbody, "Range:")
const getFunctional = (tbody: HTMLElement) => getContent(tbody, "Functional:")
const getSubpropertyOf = (tbody: HTMLElement) => getContent(tbody, "Subproperty Of:")
const getDomain = (tbody: HTMLElement) => getContent(tbody, "Domain:")
const getExtends = (tbody: HTMLElement) => getContent(tbody, "Extends:")
const getProperties = (tbody: HTMLElement) => getContent(tbody, "Properties:")

function getNotes(tbody: HTMLElement) {
  const notes = tbody.querySelector("tr:nth-child(2) > td:nth-child(2)")!

  return turndownService.turndown(notes.innerHTML).replaceAll('`', '')
}

function getExamples(tbody: HTMLElement) {
  return Array.from(tbody.querySelectorAll("tr:nth-child(1) > td:nth-child(4) pre")).map((pre) => {
    return JSON.stringify(JSON.parse(turndownService.turndown(pre.innerHTML).replaceAll('\\', '')), null, 2).replaceAll("\n", "\n * ")
  })
}

function getContent(tbody: HTMLElement, textContent: string) {
  const tr = Array.from(tbody.querySelectorAll("tr"))
    .find((tr) => tr.querySelector("td:nth-child(1)")?.textContent === textContent)

  if (!tr) {
    return null
  }

  Array.from(tr.querySelectorAll("td:nth-child(2) a")).forEach((a) => a.textContent = `[${a.textContent}](${a.getAttribute('href')})`)

  return turndownService.turndown(tr.querySelector("td:nth-child(2)")?.innerHTML).replaceAll('`', '')
}
