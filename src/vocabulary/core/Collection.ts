/**
 * A Collection is a subtype of [Object](#dfn-object) that represents ordered or unordered sets of [Object](#dfn-object) or [Link](#dfn-link) instances.

Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-core/#collection) specification for a complete description of the Collection type.
 *
 * @see https://www.w3.org/ns/activitystreams#Collection
 * @properties [[totalItems](#dfn-totalitems)](#dfn-totalitems) | [[current](#dfn-current)](#dfn-current) | [[first](#dfn-first)](#dfn-first) | [[last](#dfn-last)](#dfn-last) | [[items](#dfn-items)](#dfn-items)

Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
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
export type Collection = any
