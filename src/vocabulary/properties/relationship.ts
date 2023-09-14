/**
 * On a [Relationship](#dfn-relationship) object, the relationship property identifies the kind of relationship that exists between [subject](#dfn-subject) and [object](#dfn-object).
 *
 * @see https://www.w3.org/ns/activitystreams#relationship
 * @range [Object](#dfn-object)
 * @domain [[Relationship](#dfn-relationship)](#dfn-relationship)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally is an acquaintance of John's",
 *   "type": "Relationship",
 *   "subject": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "relationship": "http://purl.org/vocab/relationship/acquaintanceOf",
 *   "object": {
 *     "type": "Person",
 *     "name": "John"
 *   }
 * }
 * ```
 */
export type relationship = any
