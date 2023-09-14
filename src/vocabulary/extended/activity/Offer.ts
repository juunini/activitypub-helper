/**
 * Indicates that the actor is offering the object. If specified, the target indicates the entity to which the object is being offered.
 *
 * @see https://www.w3.org/ns/activitystreams#Offer
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally offered 50% off to Lewis",
 *   "type": "Offer",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "http://www.types.example/ProductOffer",
 *     "name": "50% Off!"
 *   },
 *   "target": {
 *     "type": "Person",
 *     "name": "Lewis"
 *   }
 * }
 * ```
 */
export type Offer = any
