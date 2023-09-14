import type { Base } from './Base'
import type {
  attachment,
  attributedTo,
  audience,
  content,
  context,
  name,
  endTime,
  generator,
  icon,
  image,
  inReplyTo,
  location,
  preview,
  published,
  replies,
  startTime,
  summary,
  tag,
  updated,
  url,
  to,
  bto,
  cc,
  bcc,
  mediaType,
  duration
} from '../properties'

/**
 * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as [Activity](#dfn-activity), [IntransitiveActivity](#dfn-intransitiveactivity), [Collection](#dfn-collection) and [OrderedCollection](#dfn-orderedcollection).
 *
 * @see https://www.w3.org/ns/activitystreams#Object
 * @properties [[attachment](#dfn-attachment)](#dfn-attachment) | [[attributedTo](#dfn-attributedto)](#dfn-attributedto) | [[audience](#dfn-audience)](#dfn-audience) | [[content](#dfn-content)](#dfn-content) | [[context](#dfn-context)](#dfn-context) | [[name](#dfn-name)](#dfn-name) | [[endTime](#dfn-endtime)](#dfn-endtime) | [[generator](#dfn-generator)](#dfn-generator) | [[icon](#dfn-icon)](#dfn-icon) | [[image](#dfn-image)](#dfn-image) | [[inReplyTo](#dfn-inreplyto)](#dfn-inreplyto) | [[location](#dfn-location)](#dfn-location) | [[preview](#dfn-preview)](#dfn-preview) | [[published](#dfn-published)](#dfn-published) | [[replies](#dfn-replies)](#dfn-replies) | [[startTime](#dfn-starttime)](#dfn-starttime) | [[summary](#dfn-summary)](#dfn-summary) | [[tag](#dfn-tag)](#dfn-tag) | [[updated](#dfn-updated)](#dfn-updated) | [[url](#dfn-url)](#dfn-url) | [[to](#dfn-to)](#dfn-to) | [[bto](#dfn-bto)](#dfn-bto) | [[cc](#dfn-cc)](#dfn-cc) | [[bcc](#dfn-bcc)](#dfn-bcc) | [[mediaType](#dfn-mediatype)](#dfn-mediatype) | [[duration](#dfn-duration)](#dfn-duration)
 * @disjointWith [Link](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Object",
 *   "id": "http://www.test.example/object/1",
 *   "name": "A Simple, non-specific object"
 * }
 * ```
 */
export interface Object extends Base {
  attachment?: attachment
  attributedTo?: attributedTo
  audience?: audience
  content?: content
  context?: context
  name?: name
  endTime?: endTime
  generator?: generator
  icon?: icon
  image?: image
  inReplyTo?: inReplyTo
  location?: location
  preview?: preview
  published?: published
  replies?: replies
  startTime?: startTime
  summary?: summary
  tag?: tag
  updated?: updated
  url?: url
  to?: to
  bto?: bto
  cc?: cc
  bcc?: bcc
  mediaType?: mediaType
  duration?: duration
}
