/**
 * Provides the globally unique identifier for an [Object](#dfn-object) or [Link](#dfn-link).
 *
 * @see @id
 * @range anyURI
 * @functional True
 * @domain [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "name": "Foo",
 *   "id": "http://example.org/foo"
 * }
 * ```
 */
export type id = any

