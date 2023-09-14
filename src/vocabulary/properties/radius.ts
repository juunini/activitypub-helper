/**
 * The radius from the given latitude and longitude for a Place. The units is expressed by the [units](#dfn-units) property. If [units](#dfn-units) is not specified, the default is assumed to be "m" indicating "meters".
 *
 * @see https://www.w3.org/ns/activitystreams#radius
 * @range xsd:float \[>= 0.0f\]
 * @functional True
 * @domain [[Place](#dfn-place)](#dfn-place)
 * @example
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
export type radius = any

