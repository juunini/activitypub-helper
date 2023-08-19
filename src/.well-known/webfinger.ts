export class WebFinger {
	public static CONTENT_TYPE = 'application/jrd+json';

	constructor(
		private readonly host: string,
		private readonly subscribePath: string
	) {}

  public parseAcct(resource: string) {
    const acct = resource.replace('acct:', '');
    const [id, host] = acct.startsWith('@')
      ? acct.replace('@', '').split('@')
      : acct.split('@');

		if (host !== this.host) {
			throw new Error(`Host mismatch: ${host} !== ${this.host}`);
		}

    return { id, host };
  }

  public response(id: string, uid?: string) {
    return {
			subject: `acct:${id}@${this.host}`,
			aliases: [`https://${this.host}/@${id}`, `https://${this.host}/users/${uid ?? id}`],
			links: [
				{
					rel: 'http://webfinger.net/rel/profile-page',
					type: 'text/html',
					href: `https://${this.host}/@${id}`
				},
				{
					rel: 'self',
					type: 'application/activity+json',
					href: `https://${this.host}/users/${uid ?? id}`
				},
				{
					rel: 'http://ostatus.org/schema/1.0/subscribe',
					template: `https://${this.host}/${this.subscribePath}?uri={uri}`
				}
			]
		}
  }
}
