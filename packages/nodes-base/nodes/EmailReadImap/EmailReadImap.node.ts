import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { EmailReadImapV1 } from './v1/EmailReadImapV1.node';
import { EmailReadImapV2 } from './v2/EmailReadImapV2.node';

export class EmailReadImap extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Email Trigger (IMAP)',
			name: 'emailReadImap',
			icon: 'fa:inbox',
			group: ['trigger'],
			description: 'Triggers the workflow when a new email is received',
			defaultVersion: 2.1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new EmailReadImapV1(baseDescription),
			2: new EmailReadImapV2(baseDescription),
			2.1: new EmailReadImapV2(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
