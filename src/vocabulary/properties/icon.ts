import type { Link } from '../core/Link'
import type { Image } from '../extended/object/Image'

/**
 * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
 *
 * @see https://www.w3.org/ns/activitystreams#icon
 * @range [[Image](#dfn-image)](#dfn-image) | [Link](#dfn-link)
 * @domain [Object](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "content": "This is all there is.",
 *   "icon": {
 *     "type": "Image",
 *     "name": "Note icon",
 *     "url": "http://example.org/note.png",
 *     "width": 16,
 *     "height": 16
 *   }
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A simple note",
 *   "type": "Note",
 *   "content": "A simple note",
 *   "icon": [
 *     {
 *       "type": "Image",
 *       "summary": "Note (16x16)",
 *       "url": "http://example.org/note1.png",
 *       "width": 16,
 *       "height": 16
 *     },
 *     {
 *       "type": "Image",
 *       "summary": "Note (32x32)",
 *       "url": "http://example.org/note2.png",
 *       "width": 32,
 *       "height": 32
 *     }
 *   ]
 * }
 * ```
 */
export type icon = Link | Image | Array<Link | Image>
