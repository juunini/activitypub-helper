import type { Activity } from './Activity'

/**
 * Instances of IntransitiveActivity are a subtype of Activity representing intransitive actions. The [object](#dfn-object) property is therefore inappropriate for these activities.
 *
 * @see https://www.w3.org/ns/activitystreams#IntransitiveActivity
 * @properties Inherits all properties from [Activity](#dfn-activity) except object.
 * @extends [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Travel",
 *   "summary": "Sally went to work",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "target": {
 *     "type": "Place",
 *     "name": "Work"
 *   }
 * }
 * ```
 */
export interface IntransitiveActivity extends Activity {}
