/**
 * A Link is an indirect, qualified reference to a resource identified by a URL. The fundamental model for links is established by \[ [RFC5988](#bib-RFC5988)\]. Many of the properties defined by the Activity Vocabulary allow values that are either instances of [Object](#dfn-object) or [Link](#dfn-link). When a [Link](#dfn-link) is used, it establishes a [qualified relation](http://patterns.dataincubator.org/book/qualified-relation.html) connecting the subject (the containing object) to the resource identified by the [href](#dfn-href). Properties of the [Link](#dfn-link) are properties of the reference as opposed to properties of the resource.
 *
 * @see https://www.w3.org/ns/activitystreams#Link
 * @properties [[href](#dfn-href)](#dfn-href) | [[rel](#dfn-rel)](#dfn-rel) | [[mediaType](#dfn-mediatype)](#dfn-mediatype) | [[name](#dfn-name)](#dfn-name) | [[hreflang](#dfn-hreflang)](#dfn-hreflang) | [[height](#dfn-height)](#dfn-height) | [[width](#dfn-width)](#dfn-width) | [[preview](#dfn-preview)](#dfn-preview)
 * @disjointWith [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Link",
 *   "href": "http://example.org/abc",
 *   "hreflang": "en",
 *   "mediaType": "text/html",
 *   "name": "An example link"
 * }
 * ```
 */
export type Link = any
