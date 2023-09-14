/**
 * Indicates that the actor has viewed the object.
 *
 * @see https://www.w3.org/ns/activitystreams#View
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally read an article",
 *   "type": "View",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Article",
 *     "name": "What You Should Know About Activity Streams"
 *   }
 * }
 * ```
 */
export type View = any
