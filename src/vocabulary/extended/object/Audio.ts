/**
 * Represents an audio document of any kind.
 *
 * @see https://www.w3.org/ns/activitystreams#Audio
 * @properties Inherits all properties from [Document](#dfn-document).
 * @extends [Document](#dfn-document)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Audio",
 *   "name": "Interview With A Famous Technologist",
 *   "url": {
 *     "type": "Link",
 *     "href": "http://example.org/podcast.mp3",
 *     "mediaType": "audio/mp3"
 *   }
 * }
 * ```
 */
export type Audio = any
