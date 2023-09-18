/**
 * Identifies the [Object](#dfn-object) or [Link](#dfn-link) type. Multiple values may be specified.
 *
 * @range anyURI
 * @domain [Object](#dfn-object) | [Link](#dfn-link)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "A foo",
 *   "type": "http://example.org/Foo"
 * }
 * ```
 */
export type type = 'Activity'
| 'Application'
| 'Article'
| 'Audio'
| 'Collection'
| 'CollectionPage'
| 'Relationship'
| 'Document'
| 'Event'
| 'Group'
| 'Image'
| 'IntransitiveActivity'
| 'Note'
| 'Object'
| 'OrderedCollection'
| 'OrderedCollectionPage'
| 'Organization'
| 'Page'
| 'Person'
| 'Place'
| 'Profile'
| 'Question'
| 'Service'
| 'Tombstone'
| 'Video'
| 'Accept'
| 'Add'
| 'Announce'
| 'Arrive'
| 'Block'
| 'Create'
| 'Delete'
| 'Dislike'
| 'Follow'
| 'Flag'
| 'Ignore'
| 'Invite'
| 'Join'
| 'Leave'
| 'Like'
| 'Listen'
| 'Move'
| 'Offer'
| 'Read'
| 'Reject'
| 'Remove'
| 'TentativeAccept'
| 'TentativeReject'
| 'Travel'
| 'Undo'
| 'Update'
| 'View'
| 'Link'
| 'Mention'
| string
