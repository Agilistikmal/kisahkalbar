import type { Category } from '../app';
import { client } from './twitterClient';

export async function post(
	category: Category,
	kisah_pendek: string,
	from?: string,
	mention?: string
) {
	const tweet = await client.v2.tweet({
		text: `
			from: ${from || 'Rahasia'}
			to: ${mention || 'Rahasia'}
			
			— ${kisah_pendek}

			Bikin postingan kisahmu di https://kisahkalbar.my.id
			#kisahkalbar
		`
	});
	return tweet;
}
