/**
 * The target resource pointed to by a [Link](#dfn-link).
 *
 * @see https://www.w3.org/ns/activitystreams#href
 * @range xsd:anyURI
 * @functional True
 * @domain [[Link](#dfn-link)](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Link",
 *   "href": "http://example.org/abc",
 *   "mediaType": "text/html",
 *   "name": "Previous"
 * }
 * ```
 */
export type href = any

