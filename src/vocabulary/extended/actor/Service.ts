import type { Object as ObjectType } from '../../core/Object'

/**
 * Represents a service of any kind.
 *
 * @see https://www.w3.org/ns/activitystreams#Service
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Service",
 *   "name": "Acme Web Service"
 * }
 * ```
 */
export interface Service extends ObjectType {
  type: 'Service'
}
