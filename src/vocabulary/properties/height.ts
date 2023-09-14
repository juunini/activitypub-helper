/**
 * On a [Link](#dfn-link), specifies a hint as to the rendering height in device-independent pixels of the linked resource.
 *
 * @see https://www.w3.org/ns/activitystreams#height
 * @range xsd:nonNegativeInteger
 * @functional True
 * @domain [Link](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Link",
 *   "href": "http://example.org/image.png",
 *   "height": 100,
 *   "width": 100
 * }
 * ```
 */
export type height = number
