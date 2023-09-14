import type { Object as ObjectType } from '../../core/Object'

/**
 * A Profile is a content object that describes another Object, typically used to describe [Actor Type](#actor-types) objects. The [describes](#dfn-describes) property is used to reference the object being described by the profile.
 *
 * @see https://www.w3.org/ns/activitystreams#Profile
 * @properties [[describes](#dfn-describes)](#dfn-describes)

Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Profile",
 *   "summary": "Sally's Profile",
 *   "describes": {
 *     "type": "Person",
 *     "name": "Sally Smith"
 *   }
 * }
 * ```
 */
export interface Profile extends ObjectType {
  type: 'Profile'
}
