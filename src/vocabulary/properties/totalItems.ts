/**
 * A non-negative integer specifying the total number of objects contained by the logical view of the collection. This number might not reflect the actual number of items serialized within the [Collection](#dfn-collection) object instance.
 *
 * @see https://www.w3.org/ns/activitystreams#totalItems
 * @range xsd:nonNegativeInteger
 * @functional True
 * @domain [Collection](#dfn-collection)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's notes",
 *   "type": "Collection",
 *   "totalItems": 2,
 *   "items": [
 *     {
 *       "type": "Note",
 *       "name": "Which Staircase Should I Use"
 *     },
 *     {
 *       "type": "Note",
 *       "name": "Something to Remember"
 *     }
 *   ]
 * }
 * ```
 */
export type totalItems = number
