/**
 * The date and time describing the actual or expected ending time of the object. When used with an [Activity](#dfn-activity) object, for instance, the [endTime](#dfn-endtime) property specifies the moment the activity concluded or is expected to conclude.
 *
 * @see https://www.w3.org/ns/activitystreams#endTime
 * @range xsd:dateTime
 * @functional True
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Event",
 *   "name": "Going-Away Party for Jim",
 *   "startTime": "2014-12-31T23:00:00-08:00",
 *   "endTime": "2015-01-01T06:00:00-08:00"
 * }
 * ```
 */
export type endTime = string
