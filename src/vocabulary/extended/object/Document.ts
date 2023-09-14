/**
 * Represents a document of any kind.
 *
 * @see https://www.w3.org/ns/activitystreams#Document
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Document",
 *   "name": "4Q Sales Forecast",
 *   "url": "http://example.org/4q-sales-forecast.pdf"
 * }
 * ```
 */
export type Document = any
