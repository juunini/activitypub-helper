/**
 * Indicates that the actor is "flagging" the object. Flagging is defined in the sense common to many social platforms as reporting content as being inappropriate for any number of reasons.
 *
 * @see https://www.w3.org/ns/activitystreams#Flag
 * @properties Inherits all properties from [Activity](#dfn-activity)
 * @extends [Activity](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally flagged an inappropriate note",
 *   "type": "Flag",
 *   "actor": "http://sally.example.org",
 *   "object": {
 *     "type": "Note",
 *     "content": "An inappropriate note"
 *   }
 * }
 * ```
 */
export type Flag = any
