/**
 * The latitude of a place
 *
 * @see https://www.w3.org/ns/activitystreams#latitude
 * @range xsd:float
 * @functional True
 * @domain [Place](#dfn-place)
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
export type latitude = any
