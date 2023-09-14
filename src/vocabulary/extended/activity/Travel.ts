/**
 * Indicates that the actor is traveling to target from origin. Travel is an IntransitiveObject whose actor specifies the direct object. If the target or origin are not specified, either can be determined by context.
 *
 * @see https://www.w3.org/ns/activitystreams#Travel
 * @properties Inherits all properties from [[IntransitiveActivity](#dfn-intransitiveactivity)](#dfn-intransitiveactivity).
 * @extends [[IntransitiveActivity](#dfn-intransitiveactivity)](#dfn-intransitiveactivity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally went home from work",
 *   "type": "Travel",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "target": {
 *     "type": "Place",
 *     "name": "Home"
 *   },
 *   "origin": {
 *     "type": "Place",
 *     "name": "Work"
 *   }
 * }
 * ```
 */
export type Travel = any
