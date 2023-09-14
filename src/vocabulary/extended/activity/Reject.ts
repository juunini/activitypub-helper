/**
 * Indicates that the actor is rejecting the object. The target and origin typically have no defined meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Reject
 * @properties Inherits all properties from [Activity](#dfn-activity)
 * @extends [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally rejected an invitation to a party",
 *   "type": "Reject",
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
 */
export type Reject = any
