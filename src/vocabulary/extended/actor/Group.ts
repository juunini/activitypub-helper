import type { Object as ObjectType } from '../../core/Object'

/**
 * Represents a formal or informal collective of Actors.
 *
 * @see https://www.w3.org/ns/activitystreams#Group
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Group",
 *   "name": "Big Beards of Austin"
 * }
 * ```
 */
export interface Group extends ObjectType {
  type: 'Group'
}
