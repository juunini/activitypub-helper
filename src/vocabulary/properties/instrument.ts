/**
 * Identifies one or more objects used (or to be used) in the completion of an [Activity](#dfn-activity).
 *
 * @see https://www.w3.org/ns/activitystreams#instrument
 * @range [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link)
 * @domain [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally listened to a piece of music on the Acme Music Service",
 *   "type": "Listen",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/foo.mp3",
 *   "instrument": {
 *     "type": "Service",
 *     "name": "Acme Music Service"
 *   }
 * }
 * ```
 */
export type instrument = any
