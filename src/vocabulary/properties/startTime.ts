/**
 * The date and time describing the actual or expected starting time of the object. When used with an [Activity](#dfn-activity) object, for instance, the [startTime](#dfn-starttime) property specifies the moment the activity began or is scheduled to begin.
 *
 * @see https://www.w3.org/ns/activitystreams#startTime
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
export type startTime = any
