/**
 * Identifies the entity (e.g. an application) that generated the object.
 *
 * @see https://www.w3.org/ns/activitystreams#generator
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "content": "This is all there is.",
 *   "generator": {
 *     "type": "Application",
 *     "name": "Exampletron 3000"
 *   }
 * }
 * ```
 */
export type generator = any
