import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor has updated the object. Note, however, that this vocabulary does not define a mechanism for describing the actual set of modifications made to object.

The target and origin typically have no defined meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Update
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally updated her note",
 *   "type": "Update",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/notes/1"
 * }
 * ```
 */
export interface Update extends Activity {
  type: 'Update'
}
