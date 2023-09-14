import type { Collection } from './Collection'
import type {
  partOf,
  next,
  prev
} from '../properties'

/**
 * Used to represent distinct subsets of items from a Collection. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-core/#dfn-collectionpage) for a complete description of the CollectionPage object.
 *
 * @see https://www.w3.org/ns/activitystreams#CollectionPage
 * @properties [[partOf](#dfn-partof)](#dfn-partof) | [[next](#dfn-next)](#dfn-next) | [[prev](#dfn-prev)](#dfn-prev)

Inherits all properties from [Collection](#dfn-collection).
 * @extends [Collection](#dfn-collection)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Page 1 of Sally's notes",
 *   "type": "CollectionPage",
 *   "id": "http://example.org/foo?page=1",
 *   "partOf": "http://example.org/foo",
 *   "items": [
 *     {
 *       "type": "Note",
 *       "name": "A Simple Note"
 *     },
 *     {
 *       "type": "Note",
 *       "name": "Another Simple Note"
 *     }
 *   ]
 * }
 * ```
 */
export interface CollectionPage extends Collection {
  partOf?: partOf
  next?: next
  prev?: prev
}
