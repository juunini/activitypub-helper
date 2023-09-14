/**
 * When used on a [Link](#dfn-link), identifies the MIME media type of the referenced resource.

When used on an [Object](#dfn-object), identifies the MIME media type of the value of the [content](#dfn-content) property. If not specified, the [content](#dfn-content) property is assumed to contain text/html content.
 *
 * @see https://www.w3.org/ns/activitystreams#mediaType
 * @range MIME Media Type
 * @functional True
 * @domain [[Link](#dfn-link)](#dfn-link) | [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Link",
 *   "href": "http://example.org/abc",
 *   "hreflang": "en",
 *   "mediaType": "text/html",
 *   "name": "Next"
 * }
 * ```
 */
export type mediaType = any

