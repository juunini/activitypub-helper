/**
 * A specialization of [Reject](#dfn-reject) in which the rejection is considered tentative.
 *
 * @see https://www.w3.org/ns/activitystreams#TentativeReject
 * @properties Inherits all properties from [Reject](#dfn-reject).
 * @extends [Reject](#dfn-reject)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally tentatively rejected an invitation to a party",
 *   "type": "TentativeReject",
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
export type TentativeReject = any
