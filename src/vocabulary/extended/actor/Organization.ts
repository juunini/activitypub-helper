import type { Object as ObjectType } from '../../core/Object'

/**
 * Represents an organization.
 *
 * @see https://www.w3.org/ns/activitystreams#Organization
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Organization",
 *   "name": "Example Co."
 * }
 * ```
 */
export interface Organization extends ObjectType {
  type: 'Organization'
}
