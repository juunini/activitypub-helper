/**
 * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
 *
 * @see https://www.w3.org/ns/activitystreams#attributedTo
 * @range [[Link](#dfn-link)](#dfn-link) | [[Object](#dfn-object)](#dfn-object)
 * @domain [[Link](#dfn-link)](#dfn-link) | [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Image",
 *   "name": "My cat taking a nap",
 *   "url": "http://example.org/cat.jpeg",
 *   "attributedTo": [
 *     {
 *       "type": "Person",
 *       "name": "Sally"
 *     }
 *   ]
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Image",
 *   "name": "My cat taking a nap",
 *   "url": "http://example.org/cat.jpeg",
 *   "attributedTo": [
 *     "http://joe.example.org",
 *     {
 *       "type": "Person",
 *       "name": "Sally"
 *     }
 *   ]
 * }
 * ```
 */
export type attributedTo = any
