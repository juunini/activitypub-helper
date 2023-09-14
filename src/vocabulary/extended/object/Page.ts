import type { Object as ObjectType } from '../../core/Object'

/**
 * Represents a Web Page.
 *
 * @see https://www.w3.org/ns/activitystreams#Page
 * @properties Inherits all properties from [[Document](#dfn-document)](#dfn-document).
 * @extends [[Document](#dfn-document)](#dfn-document)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Page",
 *   "name": "Omaha Weather Report",
 *   "url": "http://example.org/weather-in-omaha.html"
 * }
 * ```
 */
export interface Page extends ObjectType {
  type: 'Page'
}
