import { defineConfig, devices } from '@playwright/test';

require('dotenv/config');
const PORT = process.env.PORT || '3000';
const baseURL = `http://localhost:${PORT}`;
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	timeout: 30 * 1000,
	expect: {
		/**
		 * Maximum time expect() should wait for the condition to be met.
		 * For example in `await expect(locator).toHaveText();`
		 */
		timeout: 10 * 1000,
	},

	/* Fail the build on CI if you accidentally left test.only in the source code. */
	/* Retry on CI only */
	retries: process.env.CI ? 0 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	maxFailures: process.env.CI ? 5 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		actionTimeout: 10 * 1000,
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL,
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on',
		video: 'on',
		viewport: { width: 1920, height: 1080 },
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],

	/* Run your local dev server before starting the tests */
	webServer: {
		command: process.env.CI
			? `PORT=${PORT} npm run start:mocks`
			: `PORT=${PORT} npm run dev:mocks`,
		// command: `PORT=${PORT} npm run start:mocks`,
		// url: `http://127.0.0.1:${PORT}`,
		// url: baseURL,
		port: Number(PORT),
		reuseExistingServer: true,
		timeout: 15 * 1000,
	},
});
