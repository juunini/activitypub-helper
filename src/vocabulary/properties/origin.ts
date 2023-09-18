import type { Object as ObjectType } from '../core/Object'
import type { Link } from '../core/Link'

/**
 * Describes an indirect object of the activity _from_ which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
 *
 * @see https://www.w3.org/ns/activitystreams#origin
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally moved a post from List A to List B",
 *   "type": "Move",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/posts/1",
 *   "target": {
 *     "type": "Collection",
 *     "name": "List B"
 *   },
 *   "origin": {
 *     "type": "Collection",
 *     "name": "List A"
 *   }
 * }
 * ```
 */
export type origin = ObjectType | Link
