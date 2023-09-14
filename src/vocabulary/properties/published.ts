/**
 * The date and time at which the object was published
 *
 * @see https://www.w3.org/ns/activitystreams#published
 * @range xsd:dateTime
 * @functional True
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "content": "Fish swim.",
 *   "published": "2014-12-12T12:12:12Z"
 * }
 * ```
 */
export type published = any
