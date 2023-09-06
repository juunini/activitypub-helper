<div align="center">

# Activity Pub helper

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![BunJS](https://img.shields.io/badge/Bun-beige?style=for-the-badge&logo=bun&logoColor=black)
![Parcel](https://img.shields.io/badge/Parcel-deac79?style=for-the-badge&logoColor=black&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMzguMDAwMDAwcHQiIGhlaWdodD0iMzAuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAzOC4wMDAwMDAgMzAuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzMC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0xNzYgMjI1IGMtMyAtOSAtMTIgLTEyIC0yMyAtOSAtMTAgMyAxIC02IDI1IC0yMSBsNDQgLTI3IDI0IDIzIGMyNwoyNSAyMiAzMiAtMzMgNDIgLTIyIDQgLTMzIDIgLTM3IC04eiIvPgo8cGF0aCBkPSJNMTA4IDIwMyBjNyAtMyAxOCAtMTcgMjMgLTMxIDggLTIwIDEyIC0yMyAyMiAtMTMgOSAxMCA3IDE3IC0xMiAzMgotMTMgMTAgLTI4IDE5IC0zNSAxOCAtNiAwIC02IC0zIDIgLTZ6Ii8+CjxwYXRoIGQ9Ik0yODYgMTMxIGMtMyAtNSAwIC0xMSA3IC0xNCA4IC0zIDE0IDEgMTQgOSAwIDE2IC0xMyAxOSAtMjEgNXoiLz4KPHBhdGggZD0iTTE2MCA4NCBjMCAtMTQgNCAtMjMgMTAgLTE5IDYgMyAxMCAyIDEwIC00IDAgLTYgNyAtOCAxNSAtNSA4IDQgMTUKMTUgMTUgMjUgMCAyMSAtMTYgMjYgLTIzIDcgLTMgLTggLTYgLTYgLTYgNSAtMSAyNyAtMjEgMjAgLTIxIC05eiIvPgo8L2c+Cjwvc3ZnPg==)

![Version](https://img.shields.io/npm/v/activitypub-helper)

</div>

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

Others should request you to `/.well-known/webfinger?resource=acct:${username}@${host}`  
or `...?resource=acct:@${username}@${host}`

```ts
import { WebFinger } from 'activitypub-helper/.well-known'

const webfinger = new WebFinger('yodangang.express', 'authorize_interaction')
const { id, host } = webfinger.parseAcct('acct:juunini@yodangang.express') // or acct:@juunini@yodangang.express
// => { id: 'juunini', host 'yodangang.express' }

const response = webfinger.response(
  id,
  '7bb45d5a-6222-423a-afdc-154e6ae7951a' // optional. if has different id for Database primary key
)
response.links.push({
  "rel": "http://ostatus.org/schema/1.0/subscribe",
  "template": "https://yodangang.express/authorize-follow?acct={uri}"
})
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
//       template: 'https://yodangang.express/authorize-follow?acct={uri}'
//     }
//   ]
// }

new Response(JSON.stringify(response), {
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

new Response(JSON.stringify(response), {
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

new Response(JSON.stringify(response), {
  headers: {
    'Content-Type': NodeInfo.CONTENT_TYPE,
  }
})
```
