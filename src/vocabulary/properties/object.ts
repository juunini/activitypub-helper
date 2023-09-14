/**
 * When used within an [Activity](#dfn-activity), describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added.

When used within a [Relationship](#dfn-relationship) describes the entity to which the [subject](#dfn-subject) is related.
 *
 * @see https://www.w3.org/ns/activitystreams#object
 * @range [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link)
 * @domain [[Activity](#dfn-activity)](#dfn-activity) | [[Relationship](#dfn-relationship)](#dfn-relationship)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally liked a post",
 *   "type": "Like",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/posts/1"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Like",
 *   "actor": "http://sally.example.org",
 *   "object": {
 *     "type": "Note",
 *     "content": "A simple note"
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally liked a note",
 *   "type": "Like",
 *   "actor": "http://sally.example.org",
 *   "object": [
 *     "http://example.org/posts/1",
 *     {
 *       "type": "Note",
 *       "summary": "A simple note",
 *       "content": "That is a tree."
 *     }
 *   ]
 * }
 * ```
 */
export type _object = any
