/**
 * Indicates that the actor has added the object to the target. If the target property is not explicitly specified, the target would need to be determined implicitly by context. The origin can be used to identify the context from which the object originated.
 *
 * @see https://www.w3.org/ns/activitystreams#Add
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally added an object",
 *   "type": "Add",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/abc"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally added a picture of her cat to her cat picture collection",
 *   "type": "Add",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": {
 *     "type": "Image",
 *     "name": "A picture of my cat",
 *     "url": "http://example.org/img/cat.png"
 *   },
 *   "origin": {
 *     "type": "Collection",
 *     "name": "Camera Roll"
 *   },
 *   "target": {
 *     "type": "Collection",
 *     "name": "My Cat Pictures"
 *   }
 * }
 * ```
 */
export type Add = any
