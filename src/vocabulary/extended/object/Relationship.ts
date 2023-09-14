import type { Object as ObjectType } from '../../core/Object'
import type {
  subject,
  object as objectProperty,
  relationship
} from '../../properties'

/**
 * Describes a relationship between two individuals. The [subject](#dfn-subject) and [object](#dfn-object) properties are used to identify the connected individuals.

See [5.2 Representing Relationships Between Entities](#connections) for additional information.
 *
 * @see https://www.w3.org/ns/activitystreams#Relationship
 * @properties [[subject](#dfn-subject)](#dfn-subject) | [[object](#dfn-object)](#dfn-object) | [[relationship](#dfn-relationship)](#dfn-relationship)

Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
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
export interface Relationship extends ObjectType {
  type: 'Relationship'
  subject?: subject
  object?: objectProperty
  relationship?: relationship
}
