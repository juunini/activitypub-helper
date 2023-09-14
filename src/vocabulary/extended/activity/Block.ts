import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor is blocking the object. Blocking is a stronger form of [Ignore](#dfn-ignore). The typical use is to support social systems that allow one user to block activities or content of other users. The target and origin typically have no defined meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Block
 * @properties Inherits all properties from [[Ignore](#dfn-ignore)](#dfn-ignore).
 * @extends [[Ignore](#dfn-ignore)](#dfn-ignore)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally blocked Joe",
 *   "type": "Block",
 *   "actor": "http://sally.example.org",
 *   "object": "http://joe.example.org"
 * }
 * ```
 */
export interface Block extends Activity {
  type: 'Block'
}
