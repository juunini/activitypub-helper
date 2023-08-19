# activitypub-helper

## Install

```bash
# npm
npm install activitypub-helper
# yarn
yarn add activitypub-helper
# pnpm
pnpm add activitypub-helper
# bun
bun add activitypub-helper
```

## Usage

### .well-known/webfinger

Must be `/.well-known/webfinger` endpoint

```ts
import { WebFinger } from 'activitypub-helper/.well-known'

const webfinger = new WebFinger('yodangang.express', 'authorize_interaction')
const { id, host } = webfinger.parseAcct('acct:juunini@yodangang.express')
// => { id: 'juunini', host 'yodangang.express' }

const response = webfinger.response(
  id,
  '7bb45d5a-6222-423a-afdc-154e6ae7951a' // optional. if has different id for Database primary key
)
// {
//   subject: 'acct:juunini@yodangang-express',
//   aliases: ['https://yodangang-express/@juunini', 'https://yodangang-express/users/7bb45d5a-6222-423a-afdc-154e6ae7951a'],
//   links: [
//     {
//       rel: 'http://webfinger.net/rel/profile-page',
//       type: 'text/html',
//       href: 'https://yodangang-express/@juunini'
//     },
//     {
//       rel: 'self',
//       type: 'application/activity+json',
//       href: 'https://yodangang-express/users/7bb45d5a-6222-423a-afdc-154e6ae7951a'
//     },
//     {
//       rel: 'http://ostatus.org/schema/1.0/subscribe',
//       template: 'https://yodangang-express/${subscribePath}?uri={uri}'
//     }
//   ]
// }

new Response(response, {
  headers: {
    'Content-Type': WebFinger.CONTENT_TYPE,
  }
})
```

### .well-known/nodeinfo

Must be `/.well-known/nodeinfo` endpoint

```ts
import { NodeInfo } from 'activitypub-helper/.well-known'

const nodeinfo = new NodeInfo('yodangang.express'/*, '2.1' */) // version is optional. default is 2.0
const response = nodeinfo.response()
// {
//   links:[
//     {
//       rel: 'http://nodeinfo.diaspora.software/ns/schema/2.0',
//       href: 'https://yodangang.express/nodeinfo/2.0'
//     }
//   ]
// }

new Response(response, {
  headers: {
    'Content-Type': NodeInfo.CONTENT_TYPE,
  }
})
```

### nodeinfo

Must be `/nodeinfo/${version}` endpoint

```ts
import { NodeInfo } from 'activitypub-helper/nodeinfo'

const nodeinfo = new NodeInfo({
  version: '2.0', // optional
  software: {
    name: 'misskey',
    version: '13.14.2'
  },
  protocols: ['activitypub'], // optional
  services: { inbound: [], outbound: [] }, // optional
  openRegistrations: false, // optional
  usage: {
    users: {
      total: 1,
      activeHalfyear: 1,
      activeMonth: 1
    },
    localPosts: 10,
    localComments: 43
  },
  metadata: {} // optional
})
const response = nodeinfo.response()
// {
//   version: '2.0',
//   software: {
//     name: 'misskey',
//     version: '13.14.2'
//   },
//   protocols: ['activitypub'],
//   services: { inbound: [], outbound: [] },
//   openRegistrations: false,
//   usage: {
//     users: {
//       total: 1,
//       activeHalfyear: 1,
//       activeMonth: 1
//     },
//     localPosts: 10,
//     localComments: 43
//   },
//   metadata: {}
// }

new Response(response, {
  headers: {
    'Content-Type': NodeInfo.CONTENT_TYPE,
  }
})
```
