/**
 * Specifies the measurement units for the [radius](#dfn-radius) and [altitude](#dfn-altitude) properties on a [Place](#dfn-place) object. If not specified, the default is assumed to be "m" for "meters".
 *
 * @see https://www.w3.org/ns/activitystreams#units
 * @range "cm" | " feet" | " inches" | " km" | " m" | " miles" | xsd:anyURI
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
export type units = any

