import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor has listened to the object.
 *
 * @see https://www.w3.org/ns/activitystreams#Listen
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally listened to a piece of music",
 *   "type": "Listen",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/music.mp3"
 * }
 * ```
 */
export interface Listen extends Activity {
  type: 'Listen'
}
