export class WebFinger {
	public static CONTENT_TYPE = 'application/jrd+json';

	constructor(
		private readonly host: string,
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
		const aliases = [`https://${this.host}/@${id}`]
		const links = [
			{
				rel: 'http://webfinger.net/rel/profile-page',
				type: 'text/html',
				href: `https://${this.host}/@${id}`
			}
		]

		if (uid) {
			aliases.push(`https://${this.host}/users/${uid}`)
			links.push({
				rel: 'self',
				type: 'application/activity+json',
				href: `https://${this.host}/users/${uid}`
			})
		}
    return {
			subject: `acct:${id}@${this.host}`,
			aliases,
			links
		}
  }
}
