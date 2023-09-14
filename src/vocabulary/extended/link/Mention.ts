/**
 * A specialized [Link](#dfn-link) that represents an @mention.
 *
 * @see https://www.w3.org/ns/activitystreams#Mention
 * @properties Inherits all properties from [Link](#dfn-link).
 * @extends [Link](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Mention of Joe by Carrie in her note",
 *   "type": "Mention",
 *   "href": "http://example.org/joe",
 *   "name": "Joe"
 * }
 * ```
 */
export type Mention = any
