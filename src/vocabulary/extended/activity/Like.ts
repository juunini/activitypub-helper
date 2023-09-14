/**
 * Indicates that the actor likes, recommends or endorses the object. The target and origin typically have no defined meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Like
 * @properties Inherits all properties from [Activity](#dfn-activity)
 * @extends [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally liked a note",
 *   "type": "Like",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/notes/1"
 * }
 * ```
 */
export type Like = any
