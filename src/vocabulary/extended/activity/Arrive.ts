/**
 * An [IntransitiveActivity](#dfn-intransitiveactivity) that indicates that the actor has arrived at the location. The origin can be used to identify the context from which the actor originated. The target typically has no defined meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Arrive
 * @properties Inherits all properties fom [IntransitiveActivity](#dfn-intransitiveactivity).
 * @extends [IntransitiveActivity](#dfn-intransitiveactivity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally arrived at work",
 *   "type": "Arrive",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "location": {
 *     "type": "Place",
 *     "name": "Work"
 *   },
 *   "origin": {
 *     "type": "Place",
 *     "name": "Home"
 *   }
 * }
 * ```
 */
export type Arrive = any
