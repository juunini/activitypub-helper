/**
 * Identifies the items contained in a collection. The items might be ordered or unordered.
 *
 * @see https://www.w3.org/ns/activitystreams#items
 * @range [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link) | Ordered List of \[[[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link) \]
 * @domain [[Collection](#dfn-collection)](#dfn-collection)
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
 *       "name": "Reminder for Going-Away Party"
 *     },
 *     {
 *       "type": "Note",
 *       "name": "Meeting 2016-11-17"
 *     }
 *   ]
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's notes",
 *   "type": "OrderedCollection",
 *   "totalItems": 2,
 *   "orderedItems": [
 *     {
 *       "type": "Note",
 *       "name": "Meeting 2016-11-17"
 *     },
 *     {
 *       "type": "Note",
 *       "name": "Reminder for Going-Away Party"
 *     }
 *   ]
 * }
 * ```
 */
export type items = any

