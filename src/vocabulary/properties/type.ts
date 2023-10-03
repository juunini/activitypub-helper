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
export type type = 'Accept'
| 'Activity'
| 'IntransitiveActivity'
| 'Add'
| 'Announce'
| 'Application'
| 'Arrive'
| 'Article'
| 'Audio'
| 'Block'
| 'Collection'
| 'CollectionPage'
| 'Relationship'
| 'Create'
| 'Delete'
| 'Dislike'
| 'Document'
| 'Event'
| 'Follow'
| 'Flag'
| 'Group'
| 'Ignore'
| 'Image'
| 'Invite'
| 'Join'
| 'Leave'
| 'Like'
| 'Link'
| 'Mention'
| 'Note'
| 'Object'
| 'Offer'
| 'OrderedCollection'
| 'OrderedCollectionPage'
| 'Organization'
| 'Page'
| 'Person'
| 'Place'
| 'Profile'
| 'Question'
| 'Reject'
| 'Remove'
| 'Service'
| 'TentativeAccept'
| 'TentativeReject'
| 'Tombstone'
| 'Undo'
| 'Update'
| 'Video'
| 'View'
| 'Listen'
| 'Read'
| 'Move'
| 'Travel'
| 'IsFollowing'
| 'IsFollowedBy'
| 'IsContact'
| 'IsMember'
| 'Public'
