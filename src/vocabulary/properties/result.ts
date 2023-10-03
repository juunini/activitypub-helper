import { type stringOrLinkObject } from './_internal'

/**
 * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
 *
 * @see https://www.w3.org/ns/activitystreams#result
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally checked that her flight was on time",
 *   "type": [
 *     "Activity",
 *     "http://www.verbs.example/Check"
 *   ],
 *   "actor": "http://sally.example.org",
 *   "object": "http://example.org/flights/1",
 *   "result": {
 *     "type": "http://www.types.example/flightstatus",
 *     "name": "On Time"
 *   }
 * }
 * ```
 */
export type result = stringOrLinkObject
