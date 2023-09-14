import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor is removing the object. If specified, the origin indicates the context from which the object is being removed.
 *
 * @see https://www.w3.org/ns/activitystreams#Remove
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally removed a note from her notes folder",
 *   "type": "Remove",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/notes/1",
 *   "target": {
 *     "type": "Collection",
 *     "name": "Notes Folder"
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "The moderator removed Sally from a group",
 *   "type": "Remove",
 *   "actor": {
 *     "type": "http://example.org/Role",
 *     "name": "The Moderator"
 *   },
 *   "object": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "origin": {
 *     "type": "Group",
 *     "name": "A Simple Group"
 *   }
 * }
 * ```
 */
export interface Remove extends Activity {
  type: 'Remove'
}
