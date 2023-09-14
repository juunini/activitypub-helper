/**
 * Identifies an Object that is part of the public secondary audience of this Object.
 *
 * @see https://www.w3.org/ns/activitystreams#cc
 * @range [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link)
 * @domain [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally offered a post to John",
 *   "type": "Offer",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/posts/1",
 *   "target": "http://john.example.org",
 *   "cc": [
 *     "http://joe.example.org"
 *   ]
 * }
 * ```
 */
export type cc = any

