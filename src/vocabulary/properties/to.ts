import type { Object as ObjectType } from '../core/Object'
import type { Link } from '../core/Link'

/**
 * Identifies an entity considered to be part of the public primary audience of an Object
 *
 * @see https://www.w3.org/ns/activitystreams#to
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally offered the post to John",
 *   "type": "Offer",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/posts/1",
 *   "target": "http://john.example.org",
 *   "to": [
 *     "http://joe.example.org"
 *   ]
 * }
 * ```
 */
export type to = Array<string | Link | ObjectType>
