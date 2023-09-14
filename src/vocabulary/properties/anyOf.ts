/**
 * Identifies an inclusive option for a Question. Use of anyOf implies that the Question can have multiple answers. To indicate that a Question can have only one answer, use [oneOf](#dfn-oneof).
 *
 * @see https://www.w3.org/ns/activitystreams#anyOf
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [[Question](#dfn-question)](#dfn-question)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Question",
 *   "name": "What is the answer?",
 *   "anyOf": [
 *     {
 *       "type": "Note",
 *       "name": "Option A"
 *     },
 *     {
 *       "type": "Note",
 *       "name": "Option B"
 *     }
 *   ]
 * }
 * ```
 */
export type anyOf = any
