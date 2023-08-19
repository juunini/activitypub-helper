export class NodeInfo {
  public static CONTENT_TYPE = 'application/json'

  constructor(private readonly host: string, private readonly version = '2.0') {}

  public response = () => ({
    links:[
      {
        rel: `http://nodeinfo.diaspora.software/ns/schema/${this.version}`,
        href: `https://${this.host}/nodeinfo/${this.version}`
      }
    ]
  })
}
