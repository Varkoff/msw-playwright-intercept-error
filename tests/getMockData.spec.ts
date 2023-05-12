import { test, expect } from '@playwright/test';

test('Test that Mocks are running', async ({ page }) => {
	await page.goto('/data');
	await page.waitForLoadState('networkidle');
	const [data] = await Promise.all([
		page.waitForResponse(`/data`).then((res) => res.json()),
		page.goto(`/data`),
	]);
	// response should contain objects
	// const data = await response.json();
	expect(data).toBeInstanceOf(Array);
	expect(data.length).toEqual(1);
	const [first] = data;
	expect(first.id).toEqual(18);
	expect(first.name).toEqual('Mocked post');
});
