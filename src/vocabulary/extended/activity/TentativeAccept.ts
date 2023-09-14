/**
 * A specialization of [Accept](#dfn-accept) indicating that the acceptance is tentative.
 *
 * @see https://www.w3.org/ns/activitystreams#TentativeAccept
 * @properties Inherits all properties from [[Accept](#dfn-accept)](#dfn-accept).
 * @extends [[Accept](#dfn-accept)](#dfn-accept)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally tentatively accepted an invitation to a party",
 *   "type": "TentativeAccept",
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
export type TentativeAccept = any
