/**
 * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor _MAY_ be specified using an indirect [Link](#dfn-link).
 *
 * @see https://www.w3.org/ns/activitystreams#actor
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @subproperty [[attributedTo](#dfn-attributedto)](#dfn-attributedto)
 * @domain [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally offered the Foo object",
 *   "type": "Offer",
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/foo"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally offered the Foo object",
 *   "type": "Offer",
 *   "actor": {
 *     "type": "Person",
 *     "id": "http://sally.example.org",
 *     "summary": "Sally"
 *   },
 *   "object": "http://example.org/foo"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally and Joe offered the Foo object",
 *   "type": "Offer",
 *   "actor": [
 *     "http://joe.example.org",
 *     {
 *       "type": "Person",
 *       "id": "http://sally.example.org",
 *       "name": "Sally"
 *     }
 *   ],
 *   "object": "http://example.org/foo"
 * }
 * ```
 */
export type actor = any
