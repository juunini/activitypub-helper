/**
 * Identifies an entity that provides a preview of this object.
 *
 * @see https://www.w3.org/ns/activitystreams#preview
 * @range [[Link](#dfn-link)](#dfn-link) | [[Object](#dfn-object)](#dfn-object)
 * @domain [[Link](#dfn-link)](#dfn-link) | [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Video",
 *   "name": "Cool New Movie",
 *   "duration": "PT2H30M",
 *   "preview": {
 *     "type": "Video",
 *     "name": "Trailer",
 *     "duration": "PT1M",
 *     "url": {
 *       "href": "http://example.org/trailer.mkv",
 *       "mediaType": "video/mkv"
 *     }
 *   }
 * }
 * ```
 */
export type preview = any

