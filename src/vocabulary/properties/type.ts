/**
 * Identifies the [Object](#dfn-object) or [Link](#dfn-link) type. Multiple values may be specified.
 *
 * @see @type
 * @range anyURI
 * @domain [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A foo",
 *   "type": "http://example.org/Foo"
 * }
 * ```
 */
export type type = any
