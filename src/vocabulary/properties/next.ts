import type { CollectionPage } from '../core/CollectionPage'
import { type stringOrLink } from './_internal'

/**
 * In a paged [Collection](#dfn-collection), indicates the next page of items.
 *
 * @see https://www.w3.org/ns/activitystreams#next
 * @range [CollectionPage](#dfn-collectionpage) | [Link](#dfn-link)
 * @functional True
 * @domain [CollectionPage](#dfn-collectionpage)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Page 2 of Sally's blog posts",
 *   "type": "CollectionPage",
 *   "next": "http://example.org/collection?page=2",
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
 *   "summary": "Page 2 of Sally's blog posts",
 *   "type": "CollectionPage",
 *   "next": {
 *     "type": "Link",
 *     "name": "Next Page",
 *     "href": "http://example.org/collection?page=2"
 *   },
 *   "items": [
 *     "http://example.org/posts/1",
 *     "http://example.org/posts/2",
 *     "http://example.org/posts/3"
 *   ]
 * }
 * ```
 */
export type next = stringOrLink | CollectionPage
