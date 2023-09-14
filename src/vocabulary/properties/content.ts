/**
 * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The [mediaType](#dfn-mediatype) property can be used in the object to indicate a different content type.

The content _MAY_ be expressed using multiple language-tagged values.
 *
 * @see https://www.w3.org/ns/activitystreams#content
 * @range xsd:string | rdf:langString
 * @domain [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "content": "A <em>simple</em> note"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "contentMap": {
 *     "en": "A <em>simple</em> note",
 *     "es": "Una nota <em>sencilla</em>",
 *     "zh-Hans": "一段<em>简单的</em>笔记"
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "mediaType": "text/markdown",
 *   "content": "## A simple notenA simple markdown `note`"
 * }
 * ```
 */
export type content = any

