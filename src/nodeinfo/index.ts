import type {
  NodeInfo as NodeInfoResponse,
  NodeInfoServices,
  NodeInfoSoftware,
  NodeInfoUsage,
  Protocol
} from './types'

export class NodeInfo {
  public static CONTENT_TYPE = 'application/json'

  private readonly version: string
  private readonly software: Partial<NodeInfoSoftware>
  private readonly protocols: Protocol[]
  private readonly services: NodeInfoServices
  private readonly openRegistrations: boolean
  private readonly usage: NodeInfoUsage
  private readonly metadata: object

  constructor ({
    version = '2.0',
    software,
    protocols = ['activitypub'],
    services = {
      inbound: [],
      outbound: []
    },
    openRegistrations = false,
    usage,
    metadata = {}
  }: Partial<NodeInfoResponse>) {
    if (software == null) {
      throw new Error('software is required')
    }

    if (usage == null) {
      throw new Error('usage is required')
    }

    this.version = version
    this.software = software
    this.protocols = protocols
    this.services = services
    this.openRegistrations = openRegistrations
    this.usage = usage
    this.metadata = metadata
  }

  public response = (): NodeInfoResponse => ({
    version: this.version,
    software: this.software,
    protocols: this.protocols,
    services: this.services,
    openRegistrations: this.openRegistrations,
    usage: this.usage,
    metadata: this.metadata
  })
}
