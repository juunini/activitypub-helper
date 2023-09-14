/**
 * In a paged [Collection](#dfn-collection), identifies the previous page of items.
 *
 * @see https://www.w3.org/ns/activitystreams#prev
 * @range [CollectionPage](#dfn-collectionpage) | [Link](#dfn-link)
 * @functional True
 * @domain [CollectionPage](#dfn-collectionpage)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Page 1 of Sally's blog posts",
 *   "type": "CollectionPage",
 *   "prev": "http://example.org/collection?page=1",
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
 *   "summary": "Page 1 of Sally's blog posts",
 *   "type": "CollectionPage",
 *   "prev": {
 *     "type": "Link",
 *     "name": "Previous Page",
 *     "href": "http://example.org/collection?page=1"
 *   },
 *   "items": [
 *     "http://example.org/posts/1",
 *     "http://example.org/posts/2",
 *     "http://example.org/posts/3"
 *   ]
 * }
 * ```
 */
export type prev = any
