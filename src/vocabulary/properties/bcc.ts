import type { Object as ObjectType } from '../core/Object'
import type { Link } from '../core/Link'

/**
 * Identifies one or more Objects that are part of the private secondary audience of this Object.
 *
 * @see https://www.w3.org/ns/activitystreams#bcc
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally offered a post to John",
 *   "type": "Offer",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/posts/1",
 *   "target": "http://john.example.org",
 *   "bcc": [
 *     "http://joe.example.org"
 *   ]
 * }
 * ```
 */
export type bcc = Array<Link | ObjectType>
