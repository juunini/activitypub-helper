/**
 * Used to represent ordered subsets of items from an OrderedCollection. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-core/#dfn-orderedcollectionpage) for a complete description of the OrderedCollectionPage object.
 *
 * @see https://www.w3.org/ns/activitystreams#OrderedCollectionPage
 * @properties [[startIndex](#dfn-startindex)](#dfn-startindex)

Inherits all properties from [[OrderedCollection](#dfn-orderedcollection)](#dfn-orderedcollection) and [[CollectionPage](#dfn-collectionpage)](#dfn-collectionpage).
 * @extends [[OrderedCollection](#dfn-orderedcollection)](#dfn-orderedcollection) | [[CollectionPage](#dfn-collectionpage)](#dfn-collectionpage)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Page 1 of Sally's notes",
 *   "type": "OrderedCollectionPage",
 *   "id": "http://example.org/foo?page=1",
 *   "partOf": "http://example.org/foo",
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
export type OrderedCollectionPage = any
