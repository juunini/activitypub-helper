import type { Collection } from '../core/Collection'

/**
 * Identifies a [Collection](#dfn-collection) containing objects considered to be responses to this object.
 *
 * @see https://www.w3.org/ns/activitystreams#replies
 * @range [Collection](#dfn-collection)
 * @functional True
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "id": "http://www.test.example/notes/1",
 *   "content": "I am fine.",
 *   "replies": {
 *     "type": "Collection",
 *     "totalItems": 1,
 *     "items": [
 *       {
 *         "summary": "A response to the note",
 *         "type": "Note",
 *         "content": "I am glad to hear it.",
 *         "inReplyTo": "http://www.test.example/notes/1"
 *       }
 *     ]
 *   }
 * }
 * ```
 */
export type replies = Collection
