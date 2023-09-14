import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor has joined the object. The target and origin typically have no defined meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Join
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally joined a group",
 *   "type": "Join",
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
export interface Join extends Activity {
  type: 'Join'
}
