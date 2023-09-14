import type { Object as ObjectType } from '../../core/Object'

/**
 * Describes a software application.
 *
 * @see https://www.w3.org/ns/activitystreams#Application
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Application",
 *   "name": "Exampletron 3000"
 * }
 * ```
 */
export interface Application extends ObjectType {
  type: 'Application'
}
