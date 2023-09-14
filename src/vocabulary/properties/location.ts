/**
 * Indicates one or more physical or logical locations associated with the object.
 *
 * @see https://www.w3.org/ns/activitystreams#location
 * @range [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link)
 * @domain [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Person",
 *   "name": "Sally",
 *   "location": {
 *     "name": "Over the Arabian Sea, east of Socotra Island Nature Sanctuary",
 *     "type": "Place",
 *     "longitude": 12.34,
 *     "latitude": 56.78,
 *     "altitude": 90,
 *     "units": "m"
 *   }
 * }
 * ```
 */
export type location = any

