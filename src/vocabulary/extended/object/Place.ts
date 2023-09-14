/**
 * Represents a logical or physical location. See [5.3 Representing Places](#places) for additional information.
 *
 * @see https://www.w3.org/ns/activitystreams#Place
 * @properties [[accuracy](#dfn-accuracy)](#dfn-accuracy) | [[altitude](#dfn-altitude)](#dfn-altitude) | [[latitude](#dfn-latitude)](#dfn-latitude) | [[longitude](#dfn-longitude)](#dfn-longitude) | [[radius](#dfn-radius)](#dfn-radius) | [[units](#dfn-units)](#dfn-units)

Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Place",
 *   "name": "Work"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Place",
 *   "name": "Fresno Area",
 *   "latitude": 36.75,
 *   "longitude": 119.7667,
 *   "radius": 15,
 *   "units": "miles"
 * }
 * ```
 */
export type Place = any
