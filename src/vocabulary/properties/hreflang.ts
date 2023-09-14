/**
 * Hints as to the language used by the target resource. Value _MUST_ be a \[[BCP47](#bib-BCP47)\] Language-Tag.
 *
 * @see https://www.w3.org/ns/activitystreams#hreflang
 * @range \[[\[BCP47\](#bib-BCP47)](#bib-BCP47)\] Language Tag
 * @functional True
 * @domain [Link](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Link",
 *   "href": "http://example.org/abc",
 *   "hreflang": "en",
 *   "mediaType": "text/html",
 *   "name": "Previous"
 * }
 * ```
 */
export type hreflang = string
