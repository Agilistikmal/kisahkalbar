import type { Category } from '../app';
import { createPostImagePath } from './canvasService';
import { client } from './twitterClient';

export async function post(
	category: Category,
	kisah_pendek: string,
	kisah: string,
	from?: string,
	mention?: string
) {
	const image_path = await createPostImagePath(category, kisah, from, mention);
	await new Promise((r) => setTimeout(r, 2000));
	const media_id = await client.v1.uploadMedia(image_path);
	const tweet = await client.v2.tweet({
		media: {
			media_ids: [media_id]
		},
		text: `
			from: ${from || 'Rahasia'}
			to: ${mention || 'Rahasia'}
			
			— ${kisah_pendek}

			Bikin postingan kisahmu di https://kisahkalbar.vercel.app
			#kisahkalbar
		`
	});
	return tweet;
}
