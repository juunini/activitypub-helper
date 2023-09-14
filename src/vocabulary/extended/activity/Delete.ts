/**
 * Indicates that the actor has deleted the object. If specified, the origin indicates the context from which the object was deleted.
 *
 * @see https://www.w3.org/ns/activitystreams#Delete
 * @properties Inherits all properties from [Activity](#dfn-activity)
 * @extends [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally deleted a note",
 *   "type": "Delete",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/notes/1",
 *   "origin": {
 *     "type": "Collection",
 *     "name": "Sally's Notes"
 *   }
 * }
 * ```
 */
export type Delete = any
