/**
 * An Activity is a subtype of [Object](#dfn-object) that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken.
 *
 * @see https://www.w3.org/ns/activitystreams#Activity
 * @properties [[actor](#dfn-actor)](#dfn-actor) | [Object](#dfn-object) | [[target](#dfn-target)](#dfn-target) | [[result](#dfn-result)](#dfn-result) | [[origin](#dfn-origin)](#dfn-origin) | [[instrument](#dfn-instrument)](#dfn-instrument)

Inherits all properties from [Object](#dfn-object).
 * @extends [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Activity",
 *   "summary": "Sally did something to a note",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Note",
 *     "name": "A Note"
 *   }
 * }
 * ```
 */
export type Activity = any
