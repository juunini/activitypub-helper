/**
 * A simple, human-readable, plain-text name for the object. HTML markup _MUST NOT_ be included. The name _MAY_ be expressed using multiple language-tagged values.
 *
 * @see https://www.w3.org/ns/activitystreams#name
 * @range xsd:string | rdf:langString
 * @domain [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Note",
 *   "name": "A simple note"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Note",
 *   "nameMap": {
 *     "en": "A simple note",
 *     "es": "Una nota sencilla",
 *     "zh-Hans": "一段简单的笔记"
 *   }
 * }
 * ```
 */
export type name = any

