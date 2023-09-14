/**
 * On a [Tombstone](#dfn-tombstone) object, the deleted property is a timestamp for when the object was deleted.
 *
 * @see https://www.w3.org/ns/activitystreams#deleted
 * @range xsd:dateTime
 * @functional True
 * @domain [Tombstone](#dfn-tombstone)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "This image has been deleted",
 *   "type": "Tombstone",
 *   "deleted": "2016-05-03T00:00:00Z"
 * }
 * ```
 */
export type deleted = string
