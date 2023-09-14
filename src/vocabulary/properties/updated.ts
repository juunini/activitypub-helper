/**
 * The date and time at which the object was updated
 *
 * @see https://www.w3.org/ns/activitystreams#updated
 * @range xsd:dateTime
 * @functional True
 * @domain [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "name": "Cranberry Sauce Idea",
 *   "type": "Note",
 *   "content": "Mush it up so it does not have the same shape as the can.",
 *   "updated": "2014-12-12T12:12:12Z"
 * }
 * ```
 */
export type updated = any
