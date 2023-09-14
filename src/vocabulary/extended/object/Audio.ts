import type { Object as ObjectType } from '../../core/Object'

/**
 * Represents an audio document of any kind.
 *
 * @see https://www.w3.org/ns/activitystreams#Audio
 * @properties Inherits all properties from [[Document](#dfn-document)](#dfn-document).
 * @extends [[Document](#dfn-document)](#dfn-document)
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
export interface Audio extends ObjectType {
  type: 'Audio'
}
