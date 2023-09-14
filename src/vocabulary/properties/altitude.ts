/**
 * Indicates the altitude of a place. The measurement units is indicated using the [units](#dfn-units) property. If [units](#dfn-units) is not specified, the default is assumed to be "m" indicating meters.
 *
 * @see https://www.w3.org/ns/activitystreams#altitude
 * @range xsd:float
 * @functional True
 * @domain [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Place",
 *   "name": "Fresno Area",
 *   "altitude": 15,
 *   "latitude": 36.75,
 *   "longitude": 119.7667,
 *   "units": "miles"
 * }
 * ```
 */
export type altitude = any
