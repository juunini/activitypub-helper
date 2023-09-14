/**
 * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
 *
 * @see https://www.w3.org/ns/activitystreams#target
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally offered the post to John",
 *   "type": "Offer",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/posts/1",
 *   "target": "http://john.example.org"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally offered the post to John",
 *   "type": "Offer",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/posts/1",
 *   "target": {
 *     "type": "Person",
 *     "name": "John"
 *   }
 * }
 * ```
 */
export type target = any
