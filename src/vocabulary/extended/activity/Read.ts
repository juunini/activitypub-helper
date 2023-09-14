/**
 * Indicates that the actor has read the object.
 *
 * @see https://www.w3.org/ns/activitystreams#Read
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally read a blog post",
 *   "type": "Read",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/posts/1"
 * }
 * ```
 */
export type Read = any
