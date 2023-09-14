/**
 * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries _MAY_ be provided.
 *
 * @see https://www.w3.org/ns/activitystreams#summary
 * @range xsd:string | rdf:langString
 * @domain [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "name": "Cane Sugar Processing",
 *   "type": "Note",
 *   "summary": "A simple <em>note</em>"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "name": "Cane Sugar Processing",
 *   "type": "Note",
 *   "summaryMap": {
 *     "en": "A simple <em>note</em>",
 *     "es": "Una <em>nota</em> sencilla",
 *     "zh-Hans": "一段<em>简单的</em>笔记"
 *   }
 * }
 * ```
 */
export type summary = any

