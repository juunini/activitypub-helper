import type { Object as ObjectType } from '../core/Object'

/**
 * On a [Tombstone](#dfn-tombstone) object, the formerType property identifies the type of the object that was deleted.
 *
 * @see https://www.w3.org/ns/activitystreams#formerType
 * @range [Object](#dfn-object)
 * @functional False
 * @domain [Tombstone](#dfn-tombstone)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "This image has been deleted",
 *   "type": "Tombstone",
 *   "formerType": "Image",
 *   "url": "http://example.org/image/2"
 * }
 * ```
 */
export type formerType = string | ObjectType
