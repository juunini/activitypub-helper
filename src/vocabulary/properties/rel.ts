/**
 * A link relation associated with a [Link](#dfn-link). The value _MUST_ conform to both the \[[HTML5](#bib-HTML5)\] and \[[RFC5988](#bib-RFC5988)\] "link relation" definitions.

In the \[[HTML5](#bib-HTML5)\], any string not containing the "space" U+0020, "tab" (U+0009), "LF" (U+000A), "FF" (U+000C), "CR" (U+000D) or "," (U+002C) characters can be used as a valid link relation.
 *
 * @see https://www.w3.org/ns/activitystreams#rel
 * @range \[[\[RFC5988\](#bib-RFC5988)](#bib-RFC5988)\] or [\[\[HTML5\]\](http://www.w3.org/TR/html5/document-metadata.html#attr-link-rel)](http://www.w3.org/TR/html5/document-metadata.html#attr-link-rel) Link Relation
 * @domain [[Link](#dfn-link)](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Link",
 *   "href": "http://example.org/abc",
 *   "hreflang": "en",
 *   "mediaType": "text/html",
 *   "name": "Preview",
 *   "rel": [
 *     "canonical",
 *     "preview"
 *   ]
 * }
 * ```
 */
export type rel = any
