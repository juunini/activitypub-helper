import type { Link } from '../core/Link'

/**
 * Identifies one or more links to representations of the object
 *
 * @see https://www.w3.org/ns/activitystreams#url
 * @range xsd:anyURI | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Document",
 *   "name": "4Q Sales Forecast",
 *   "url": "http://example.org/4q-sales-forecast.pdf"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Document",
 *   "name": "4Q Sales Forecast",
 *   "url": {
 *     "type": "Link",
 *     "href": "http://example.org/4q-sales-forecast.pdf"
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Document",
 *   "name": "4Q Sales Forecast",
 *   "url": [
 *     {
 *       "type": "Link",
 *       "href": "http://example.org/4q-sales-forecast.pdf",
 *       "mediaType": "application/pdf"
 *     },
 *     {
 *       "type": "Link",
 *       "href": "http://example.org/4q-sales-forecast.html",
 *       "mediaType": "text/html"
 *     }
 *   ]
 * }
 * ```
 */
export type url = string | Link | Array<string | Link>
