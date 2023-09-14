/**
 * Describes a relationship between two individuals. The [subject](#dfn-subject) and [object](#dfn-object) properties are used to identify the connected individuals.

See [5.2 Representing Relationships Between Entities](#connections) for additional information.
 *
 * @see https://www.w3.org/ns/activitystreams#Relationship
 * @properties [[subject](#dfn-subject)](#dfn-subject) | [Object](#dfn-object) | [[relationship](#dfn-relationship)](#dfn-relationship)

Inherits all properties from [Object](#dfn-object).
 * @extends [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally is an acquaintance of John",
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
export type Relationship = any
