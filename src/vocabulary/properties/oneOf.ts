import type { Object as ObjectType } from '../core/Object'
import type { Link } from '../core/Link'
import type { Note } from '../extended/object/Note'

/**
 * Identifies an exclusive option for a Question. Use of oneOf implies that the Question can have only a single answer. To indicate that a Question can have multiple answers, use [anyOf](#dfn-anyof).
 *
 * @see https://www.w3.org/ns/activitystreams#oneOf
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [[Question](#dfn-question)](#dfn-question)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Question",
 *   "name": "What is the answer?",
 *   "oneOf": [
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
export type oneOf = Array<ObjectType | Link | Note>
