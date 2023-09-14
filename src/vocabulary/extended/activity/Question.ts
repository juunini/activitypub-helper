/**
 * Represents a question being asked. Question objects are an extension of [IntransitiveActivity](#dfn-intransitiveactivity). That is, the Question object is an Activity, but the direct object is the question itself and therefore it would not contain an [object](#dfn-object) property.

Either of the [anyOf](#dfn-anyof) and [oneOf](#dfn-oneof) properties _MAY_ be used to express possible answers, but a Question object _MUST NOT_ have both properties.
 *
 * @see https://www.w3.org/ns/activitystreams#Question
 * @properties [[oneOf](#dfn-oneof)](#dfn-oneof) | [[anyOf](#dfn-anyof)](#dfn-anyof) | [[closed](#dfn-closed)](#dfn-closed)

Inherits all properties from [[IntransitiveActivity](#dfn-intransitiveactivity)](#dfn-intransitiveactivity).
 * @extends [[IntransitiveActivity](#dfn-intransitiveactivity)](#dfn-intransitiveactivity).
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
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Question",
 *   "name": "What is the answer?",
 *   "closed": "2016-05-10T00:00:00Z"
 * }
 * ```
 */
export type Question = any
