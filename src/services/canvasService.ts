import { createCanvas, loadImage, registerFont, type Image } from 'canvas';
import type { Category } from '../app';
import fs from 'fs';
import crypto from 'crypto';

export async function createPostImagePath(
	category: Category,
	kisah: string,
	from?: string,
	mention?: string
) {
	registerFont('./static/fonts/Inika-Regular.ttf', { family: 'Inika' });
	registerFont('./static/fonts/Inika-Bold.ttf', { family: 'Inika', weight: 'bold' });

	const canvas = createCanvas(1200, 675);
	const ctx = canvas.getContext('2d');

	if (category == 'CINTA') {
		const template: Image = await loadImage('./static/template_kisah_cinta.png');
		ctx.drawImage(template, 0, 0);
	}
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillStyle = '#1B1B1B';

	ctx.font = '24px Inika';
	ctx.fillText(`from: ${from || 'Rahasia'}`, 1200 / 2, 80);
	ctx.fillText(`to: ${mention || 'Rahasia'}`, 1200 / 2, 110);

	let list_text = kisah.match(/\s*(?:(\S{32})|([\s\S]{1,32})(?!\S))/g) ?? [];
	if (kisah.length < 180) {
		ctx.font = 'bold 64px Inika';
		list_text = kisah.match(/\s*(?:(\S{32})|([\s\S]{1,32})(?!\S))/g) ?? [];
	} else if (kisah.length < 270) {
		ctx.font = 'bold 48px Inika';
		list_text = kisah.match(/\s*(?:(\S{48})|([\s\S]{1,48})(?!\S))/g) ?? [];
	} else if (kisah.length < 405) {
		ctx.font = 'bold 32px Inika';
		list_text = kisah.match(/\s*(?:(\S{64})|([\s\S]{1,64})(?!\S))/g) ?? [];
	} else if (kisah.length > 405) {
		ctx.font = 'bold 24px Inika';
		list_text = kisah.match(/\s*(?:(\S{96})|([\s\S]{1,96})(?!\S))/g) ?? [];
	}

	const formatted_text = list_text.join('\n');
	ctx.fillText(formatted_text, 1200 / 2, 675 / 4, 1036);

	return canvas.toBuffer();
}
