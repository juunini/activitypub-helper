import type { Image } from '../extended/object/Image'
import type { Link } from '../core/Link'

/**
 * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
 *
 * @see https://www.w3.org/ns/activitystreams#image
 * @range [[Image](#dfn-image)](#dfn-image) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "name": "A simple note",
 *   "type": "Note",
 *   "content": "This is all there is.",
 *   "image": {
 *     "type": "Image",
 *     "name": "A Cat",
 *     "url": "http://example.org/cat.png"
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "name": "A simple note",
 *   "type": "Note",
 *   "content": "This is all there is.",
 *   "image": [
 *     {
 *       "type": "Image",
 *       "name": "Cat 1",
 *       "url": "http://example.org/cat1.png"
 *     },
 *     {
 *       "type": "Image",
 *       "name": "Cat 2",
 *       "url": "http://example.org/cat2.png"
 *     }
 *   ]
 * }
 * ```
 */
export type image = string | Link | Image | Array<string | Link | Image>
