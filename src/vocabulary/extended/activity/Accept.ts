/**
 * Indicates that the actor accepts the object. The target property can be used in certain circumstances to indicate the context into which the object has been accepted.
 *
 * @see https://www.w3.org/ns/activitystreams#Accept
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally accepted an invitation to a party",
 *   "type": "Accept",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Invite",
 *     "actor": "http://john.example.org",
 *     "object": {
 *       "type": "Event",
 *       "name": "Going-Away Party for Jim"
 *     }
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally accepted Joe into the club",
 *   "type": "Accept",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Person",
 *     "name": "Joe"
 *   },
 *   "target": {
 *     "type": "Group",
 *     "name": "The Club"
 *   }
 * }
 * ```
 */
export type Accept = any
