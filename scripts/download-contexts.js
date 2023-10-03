import { writeFileSync } from 'fs'

const customFetch = (url) => fetch(url, {
  headers: { 'Accept': 'application/ld+json' }
}).then(response => response.text())

async function activitystreams() {
  const data = await customFetch('https://www.w3.org/ns/activitystreams')

  writeFileSync('src/contexts/activitystreams.json', data)
}

async function vcard() {
  const data = await customFetch('https://www.w3.org/2006/vcard/ns')

  writeFileSync('src/contexts/vcard.json', data)
}

async function ldp() {
  const data = await customFetch('http://www.w3.org/ns/ldp')

  writeFileSync('src/contexts/ldp.json', data)
}

await activitystreams()
await vcard()
await ldp()

const xmlSchema = await customFetch('https://www.w3.org/2001/XMLSchema')

writeFileSync('src/contexts/index.ts', `import activitystreams from './activitystreams.json'
import vcard from './vcard.json'
import ldp from './ldp.json'

export const CONTEXTS = {
  'https://www.w3.org/ns/activitystreams': activitystreams,
  'https://www.w3.org/2006/vcard/ns': vcard,
  'http://www.w3.org/ns/ldp': ldp,
  'https://www.w3.org/2001/XMLSchema': \`${xmlSchema.replaceAll('\t', '  ')}\`
}
`)
