import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor has left the object. The target and origin typically have no meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Leave
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally left work",
 *   "type": "Leave",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Place",
 *     "name": "Work"
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally left a group",
 *   "type": "Leave",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Group",
 *     "name": "A Simple Group"
 *   }
 * }
 * ```
 */
export interface Leave extends Activity {
  type: 'Leave'
}
