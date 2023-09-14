/**
 * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
 *
 * @see https://www.w3.org/ns/activitystreams#audience
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "name": "Holiday announcement",
 *   "type": "Note",
 *   "content": "Thursday will be a company-wide holiday. Enjoy your day off!",
 *   "audience": {
 *     "type": "http://example.org/Organization",
 *     "name": "ExampleCo LLC"
 *   }
 * }
 * ```
 */
export type audience = any
