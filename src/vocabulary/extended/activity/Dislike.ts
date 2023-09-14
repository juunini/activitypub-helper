/**
 * Indicates that the actor dislikes the object.
 *
 * @see https://www.w3.org/ns/activitystreams#Dislike
 * @properties Inherits all properties from [Activity](#dfn-activity)
 * @extends [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally disliked a post",
 *   "type": "Dislike",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/posts/1"
 * }
 * ```
 */
export type Dislike = any
