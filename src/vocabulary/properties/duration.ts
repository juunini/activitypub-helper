/**
 * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the [duration](#dfn-duration) property indicates the object's approximate duration. The value _MUST_ be expressed as an xsd:duration as defined by \[ [xmlschema11-2](#bib-xmlschema11-2)\], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
 *
 * @see https://www.w3.org/ns/activitystreams#duration
 * @range xsd:duration
 * @functional True
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Video",
 *   "name": "Birds Flying",
 *   "url": "http://example.org/video.mkv",
 *   "duration": "PT2H"
 * }
 * ```
 */
export type duration = any
