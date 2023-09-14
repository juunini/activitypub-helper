/**
 * A non-negative integer value identifying the relative position within the logical view of a strictly ordered collection.
 *
 * @see https://www.w3.org/ns/activitystreams#startIndex
 * @range xsd:nonNegativeInteger
 * @functional True
 * @domain [[OrderedCollectionPage](#dfn-orderedcollectionpage)](#dfn-orderedcollectionpage)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Page 1 of Sally's notes",
 *   "type": "OrderedCollectionPage",
 *   "startIndex": 0,
 *   "orderedItems": [
 *     {
 *       "type": "Note",
 *       "name": "Density of Water"
 *     },
 *     {
 *       "type": "Note",
 *       "name": "Air Mattress Idea"
 *     }
 *   ]
 * }
 * ```
 */
export type startIndex = any
