import { type stringOrLinkObject } from './_internal'

/**
 * On a [Profile](#dfn-profile) object, the describes property identifies the object described by the Profile.
 *
 * @see https://www.w3.org/ns/activitystreams#describes
 * @range [Object](#dfn-object)
 * @functional True
 * @domain [[Profile](#dfn-profile)](#dfn-profile)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's profile",
 *   "type": "Profile",
 *   "describes": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "url": "http://sally.example.org"
 * }
 * ```
 */
export type describes = stringOrLinkObject
