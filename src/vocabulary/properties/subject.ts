import { type stringOrLinkObject } from './_internal'

/**
 * On a [Relationship](#dfn-relationship) object, the subject property identifies one of the connected individuals. For instance, for a Relationship object describing "John is related to Sally", subject would refer to John.
 *
 * @see https://www.w3.org/ns/activitystreams#subject
 * @range [Link](#dfn-link) | [Object](#dfn-object)
 * @functional True
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
export type subject = stringOrLinkObject
