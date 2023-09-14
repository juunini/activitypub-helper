import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor has created the object.
 *
 * @see https://www.w3.org/ns/activitystreams#Create
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally created a note",
 *   "type": "Create",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Note",
 *     "name": "A Simple Note",
 *     "content": "This is a simple note"
 *   }
 * }
 * ```
 */
export interface Create extends Activity {
  type: 'Create'
}
