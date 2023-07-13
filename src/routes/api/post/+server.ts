import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { post } from '../../../services/postService';

export async function POST(event: RequestEvent) {
	const body = await event.request.json();
	await post('CINTA', body.kisah_pendek, body.kisah, body.from, body.mention);
	return json({
		message: 'Success'
	});
}
