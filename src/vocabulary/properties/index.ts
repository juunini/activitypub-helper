import { type stringOrLinkObject } from './_internal'

export type { id } from './id'
export type { type } from './type'
export type { subject } from './subject'
export type { relationship } from './relationship'
export type { actor } from './actor'
export type { attributedTo } from './attributedTo'
export type { attachment } from './attachment'
export type { bcc } from './bcc'
export type { bto } from './bto'
export type { cc } from './cc'
export type { context } from './context'
export type { current } from './current'
export type { first } from './first'
export type { generator } from './generator'
export type { icon } from './icon'
export type { image } from './image'
export type { inReplyTo } from './inReplyTo'
export type { items, orderedItems } from './items'
export type { instrument } from './instrument'
export type { last } from './last'
export type { location } from './location'
export type { next } from './next'
export type { _object as object } from './object'
export type { oneOf } from './oneOf'
export type { anyOf } from './anyOf'
export type { closed } from './closed'
export type { origin } from './origin'
export type { accuracy } from './accuracy'
export type { prev } from './prev'
export type { preview } from './preview'
export type { replies } from './replies'
export type { result } from './result'
export type { audience } from './audience'
export type { partOf } from './partOf'
export type { tag } from './tag'
export type { target } from './target'
export type { to } from './to'
export type { url } from './url'
export type { altitude } from './altitude'
export type { content, contentMap } from './content'
export type { name, nameMap } from './name'
export type { duration } from './duration'
export type { endTime } from './endTime'
export type { height } from './height'
export type { href } from './href'
export type { hreflang } from './hreflang'
export type { latitude } from './latitude'
export type { longitude } from './longitude'
export type { mediaType } from './mediaType'
export type { published } from './published'
export type { radius } from './radius'
export type { rel } from './rel'
export type { startIndex } from './startIndex'
export type { startTime } from './startTime'
export type { summary, summaryMap } from './summary'
export type { totalItems } from './totalItems'
export type { units } from './units'
export type { updated } from './updated'
export type { width } from './width'
export type { describes } from './describes'
export type { formerType } from './formerType'
export type { deleted } from './deleted'

export type inbox = string
export type outbox = string
export type following = string
export type followers = string
export type streams = stringOrLinkObject[]
export type preferredUsername = string
export type endpoints = string[]
export type uploadMedia = string
export type proxyUrl = string
export type liked = string
export type oauthAuthorizationEndpoint = string
export type oauthTokenEndpoint = string
export type provideClientKey = string
export type signClientKey = string
export type sharedInbox = string
export type source = string
export type likes = string
export type shares = string
export type alsoKnownAs = string[]
