import type { Object as ObjectType } from '../../core/Object'
import type {
  formerType,
  deleted,
  orderedItems
} from '../../properties'

/**
 * A Tombstone represents a content object that has been deleted. It can be used in [Collection](#dfn-collection)s to signify that there used to be an object at this position, but it has been deleted.
 *
 * @see https://www.w3.org/ns/activitystreams#Tombstone
 * @properties [[formerType](#dfn-formertype)](#dfn-formertype) | [[deleted](#dfn-deleted)](#dfn-deleted)

Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "type": "OrderedCollection",
 *   "totalItems": 3,
 *   "name": "Vacation photos 2016",
 *   "orderedItems": [
 *     {
 *       "type": "Image",
 *       "id": "http://image.example/1"
 *     },
 *     {
 *       "type": "Tombstone",
 *       "formerType": "Image",
 *       "id": "http://image.example/2",
 *       "deleted": "2016-03-17T00:00:00Z"
 *     },
 *     {
 *       "type": "Image",
 *       "id": "http://image.example/3"
 *     }
 *   ]
 * }
 * ```
 */
export interface Tombstone extends ObjectType {
  type: 'Tombstone'
  formerType?: formerType
  deleted?: deleted
  orderedItems?: orderedItems
}
