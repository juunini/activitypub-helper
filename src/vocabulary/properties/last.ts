import type { CollectionPage } from '../core/CollectionPage'
import { type stringOrLink } from './_internal'

/**
 * In a paged [Collection](#dfn-collection), indicates the furthest proceeding page of the collection.
 *
 * @see https://www.w3.org/ns/activitystreams#last
 * @range [CollectionPage](#dfn-collectionpage) | [Link](#dfn-link)
 * @functional True
 * @domain [Collection](#dfn-collection)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A collection",
 *   "type": "Collection",
 *   "totalItems": 3,
 *   "last": "http://example.org/collection?page=1"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A collection",
 *   "type": "Collection",
 *   "totalItems": 5,
 *   "last": {
 *     "type": "Link",
 *     "summary": "Last Page",
 *     "href": "http://example.org/collection?page=1"
 *   }
 * }
 * ```
 */
export type last = stringOrLink | CollectionPage
