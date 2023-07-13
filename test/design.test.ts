import { describe, expect, it } from 'vitest';
import { createPost } from '../src/services/canvasService';

describe('Create canvas from template', () => {
	it('Should create image on temp', async () => {
		const result = await createPost('CINTA', 'HAI');
		await expect(result).toBeDefined();
	});
});
