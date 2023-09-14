/**
 * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
 *
 * @see https://www.w3.org/ns/activitystreams#attachment
 * @range [Object](#dfn-object) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Note",
 *   "name": "Have you seen my cat?",
 *   "attachment": [
 *     {
 *       "type": "Image",
 *       "content": "This is what he looks like.",
 *       "url": "http://example.org/cat.jpeg"
 *     }
 *   ]
 * }
 * ```
 */
export type attachment = any
export type attachments = any
