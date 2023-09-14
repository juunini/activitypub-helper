/**
 * An image document of any kind
 *
 * @see https://www.w3.org/ns/activitystreams#Image
 * @properties Inherits all properties from [[Document](#dfn-document)](#dfn-document).
 * @extends [[Document](#dfn-document)](#dfn-document)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Image",
 *   "name": "Cat Jumping on Wagon",
 *   "url": [
 *     {
 *       "type": "Link",
 *       "href": "http://example.org/image.jpeg",
 *       "mediaType": "image/jpeg"
 *     },
 *     {
 *       "type": "Link",
 *       "href": "http://example.org/image.png",
 *       "mediaType": "image/png"
 *     }
 *   ]
 * }
 * ```
 */
export type Image = any
