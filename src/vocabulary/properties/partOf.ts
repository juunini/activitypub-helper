import type { Link } from '../core/Link'
import type { Collection } from '../core/Collection'

/**
 * Identifies the [Collection](#dfn-collection) to which a [CollectionPage](#dfn-collectionpage) objects items belong.
 *
 * @see https://www.w3.org/ns/activitystreams#partOf
 * @range [Link](#dfn-link) | [Collection](#dfn-collection)
 * @functional True
 * @domain [CollectionPage](#dfn-collectionpage)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Page 1 of Sally's notes",
 *   "type": "CollectionPage",
 *   "id": "http://example.org/collection?page=1",
 *   "partOf": "http://example.org/collection",
 *   "items": [
 *     {
 *       "type": "Note",
 *       "name": "Pizza Toppings to Try"
 *     },
 *     {
 *       "type": "Note",
 *       "name": "Thought about California"
 *     }
 *   ]
 * }
 * ```
 */
export type partOf = Link | Collection
