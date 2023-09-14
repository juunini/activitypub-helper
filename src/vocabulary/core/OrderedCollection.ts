/**
 * A subtype of [Collection](#dfn-collection) in which members of the logical collection are assumed to always be strictly ordered.
 *
 * @see https://www.w3.org/ns/activitystreams#OrderedCollection
 * @properties Inherits all properties from [Collection](#dfn-collection).
 * @extends [Collection](#dfn-collection)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's notes",
 *   "type": "OrderedCollection",
 *   "totalItems": 2,
 *   "orderedItems": [
 *     {
 *       "type": "Note",
 *       "name": "A Simple Note"
 *     },
 *     {
 *       "type": "Note",
 *       "name": "Another Simple Note"
 *     }
 *   ]
 * }
 * ```
 */
export type OrderedCollection = any
