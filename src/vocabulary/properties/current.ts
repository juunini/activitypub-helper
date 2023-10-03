import { type CollectionPage } from '../core/CollectionPage'
import { type stringOrLink } from './_internal'

/**
 * In a paged [Collection](#dfn-collection), indicates the page that contains the most recently updated member items.
 *
 * @see https://www.w3.org/ns/activitystreams#current
 * @range [CollectionPage](#dfn-collectionpage) | [Link](#dfn-link)
 * @functional True
 * @domain [Collection](#dfn-collection)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's blog posts",
 *   "type": "Collection",
 *   "totalItems": 3,
 *   "current": "http://example.org/collection",
 *   "items": [
 *     "http://example.org/posts/1",
 *     "http://example.org/posts/2",
 *     "http://example.org/posts/3"
 *   ]
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's blog posts",
 *   "type": "Collection",
 *   "totalItems": 3,
 *   "current": {
 *     "type": "Link",
 *     "summary": "Most Recent Items",
 *     "href": "http://example.org/collection"
 *   },
 *   "items": [
 *     "http://example.org/posts/1",
 *     "http://example.org/posts/2",
 *     "http://example.org/posts/3"
 *   ]
 * }
 * ```
 */
export type current = stringOrLink | CollectionPage
