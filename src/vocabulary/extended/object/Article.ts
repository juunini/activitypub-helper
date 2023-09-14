/**
 * Represents any kind of multi-paragraph written work.
 *
 * @see https://www.w3.org/ns/activitystreams#Article
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Article",
 *   "name": "What a Crazy Day I Had",
 *   "content": "<div>... you will never believe ...</div>",
 *   "attributedTo": "http://sally.example.org"
 * }
 * ```
 */
export type Article = any
