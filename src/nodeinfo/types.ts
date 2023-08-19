export type Protocol = 'activitypub'
| 'buddycloud'
| 'dfrn'
| 'diaspora'
| 'libertree'
| 'ostatus'
| 'pumpio'
| 'tent'
| 'xmpp'
| 'zot'
export type Inbound = 'atom1.0'
| 'gnusocial'
| 'imap'
| 'pnut'
| 'pop3'
| 'pumpio'
| 'rss2.0'
| 'twitter'
export type Outbound = 'atom1.0'
| 'blogger'
| 'buddycloud'
| 'diaspora'
| 'dreamwidth'
| 'drupal'
| 'facebook'
| 'friendica'
| 'gnusocial'
| 'google'
| 'insanejournal'
| 'libertree'
| 'linkedin'
| 'livejournal'
| 'mediagoblin'
| 'myspace'
| 'pinterest'
| 'pnut'
| 'posterous'
| 'pumpio'
| 'redmatrix'
| 'rss2.0'
| 'smtp'
| 'tent'
| 'tumblr'
| 'twitter'
| 'wordpress'
| 'xmpp'

export interface NodeInfo {
  version: string
  software: Partial<NodeInfoSoftware>
  protocols: Protocol[]
  services: NodeInfoServices
  openRegistrations: boolean
  usage: NodeInfoUsage
  metadata: object
}

export interface NodeInfoSoftware {
  name: string
  version: string
  repository: string
  homepage: string
}

export interface NodeInfoServices {
  inbound: Inbound[]
  outbound: Outbound[]
}

export interface NodeInfoUsage {
  users: {
    total: number
    activeHalfyear: number
    activeMonth: number
  }
  localPosts: number
  localComments: number
}
