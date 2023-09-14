/**
 * A specialization of [Offer](#dfn-offer) in which the actor is extending an invitation for the object to the target.
 *
 * @see https://www.w3.org/ns/activitystreams#Invite
 * @properties Inherits all properties from [Offer](#dfn-offer).
 * @extends [Offer](#dfn-offer)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally invited John and Lisa to a party",
 *   "type": "Invite",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Event",
 *     "name": "A Party"
 *   },
 *   "target": [
 *     {
 *       "type": "Person",
 *       "name": "John"
 *     },
 *     {
 *       "type": "Person",
 *       "name": "Lisa"
 *     }
 *   ]
 * }
 * ```
 */
export type Invite = any
