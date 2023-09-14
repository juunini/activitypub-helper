/**
 * Indicates that the actor is calling the target's attention the object.

The origin typically has no defined meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Announce
 * @properties Inherits all properties from [Activity](#dfn-activity)
 * @extends [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally announced that she had arrived at work",
 *   "type": "Announce",
 *   "actor": {
 *     "type": "Person",
 *     "id": "http://sally.example.org",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Arrive",
 *     "actor": "http://sally.example.org",
 *     "location": {
 *       "type": "Place",
 *       "name": "Work"
 *     }
 *   }
 * }
 * ```
 */
export type Announce = any
