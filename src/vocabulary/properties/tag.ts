/**
 * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
 *
 * @see https://www.w3.org/ns/activitystreams#tag
 * @range [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link)
 * @domain [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Image",
 *   "summary": "Picture of Sally",
 *   "url": "http://example.org/sally.jpg",
 *   "tag": [
 *     {
 *       "type": "Person",
 *       "id": "http://sally.example.org",
 *       "name": "Sally"
 *     }
 *   ]
 * }
 * ```
 */
export type tag = any

