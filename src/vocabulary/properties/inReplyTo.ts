import { type stringOrLinkObject } from './_internal'

/**
 * Indicates one or more entities for which this object is considered a response.
 *
 * @see https://www.w3.org/ns/activitystreams#inReplyTo
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "content": "This is all there is.",
 *   "inReplyTo": {
 *     "summary": "Previous note",
 *     "type": "Note",
 *     "content": "What else is there?"
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "content": "This is all there is.",
 *   "inReplyTo": "http://example.org/posts/1"
 * }
 * ```
 */
export type inReplyTo = stringOrLinkObject | stringOrLinkObject[]
