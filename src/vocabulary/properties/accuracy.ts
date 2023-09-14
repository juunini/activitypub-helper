/**
 * Indicates the accuracy of position coordinates on a [Place](#dfn-place) objects. Expressed in properties of percentage. e.g. "94.0" means "94.0% accurate".
 *
 * @see https://www.w3.org/ns/activitystreams#accuracy
 * @range xsd:float \[>= 0.0f, <= 100.0f\]
 * @functional True
 * @domain [Place](#dfn-place)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "name": "Liu Gu Lu Cun, Pingdu, Qingdao, Shandong, China",
 *   "type": "Place",
 *   "latitude": 36.75,
 *   "longitude": 119.7667,
 *   "accuracy": 94.5
 * }
 * ```
 */
export type accuracy = number
