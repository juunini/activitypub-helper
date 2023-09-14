import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor has moved object from origin to target. If the origin or target are not specified, either can be determined by context.
 *
 * @see https://www.w3.org/ns/activitystreams#Move
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally moved a post from List A to List B",
 *   "type": "Move",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
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
export interface Move extends Activity {
  type: 'Move'
}
