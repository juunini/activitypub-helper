/**
 * Identifies the context within which the object exists or an activity was performed.

The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
 *
 * @see https://www.w3.org/ns/activitystreams#context
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Activities in context 1",
 *   "type": "Collection",
 *   "items": [
 *     {
 *       "type": "Offer",
 *       "actor": "http://sally.example.org",
 *       "object": "http://example.org/posts/1",
 *       "target": "http://john.example.org",
 *       "context": "http://example.org/contexts/1"
 *     },
 *     {
 *       "type": "Like",
 *       "actor": "http://joe.example.org",
 *       "object": "http://example.org/posts/2",
 *       "context": "http://example.org/contexts/1"
 *     }
 *   ]
 * }
 * ```
 */
export type context = any
