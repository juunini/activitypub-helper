/**
 * Indicates that a question has been closed, and answers are no longer accepted.
 *
 * @see https://www.w3.org/ns/activitystreams#closed
 * @range [[Object](#dfn-object)](#dfn-object) | [[Link](#dfn-link)](#dfn-link) | xsd:dateTime | xsd:boolean
 * @domain [[Question](#dfn-question)](#dfn-question)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Question",
 *   "name": "What is the answer?",
 *   "closed": "2016-05-10T00:00:00Z"
 * }
 * ```
 */
export type closed = any
