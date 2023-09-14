/**
 * Represents any kind of event.
 *
 * @see https://www.w3.org/ns/activitystreams#Event
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
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
export type Event = any
