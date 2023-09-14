/**
 * Identifies the [Object](#dfn-object) or [Link](#dfn-link) type. Multiple values may be specified.
 *
 * @range anyURI
 * @domain [Object](#dfn-object) | [Link](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A foo",
 *   "type": "http://example.org/Foo"
 * }
 * ```
 */
export type type = string
