/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	future: {
		v2_errorBoundary: true,
		v2_normalizeFormMethod: true,
		unstable_dev: {
			port: '', // let it choose a random port
			appServerPort: process.env.APP_SERVER_PORT || process.env.PORT || 3000,
		},
		// unstable_dev: true,
	},

	// When running locally in development mode, we use the built in remix
	// server. This does not understand the vercel lambda module format,
	// so we default back to the standard build output.
	// ignoredRouteFiles: ['**/.*', '**/*.test.{js,jsx,ts,tsx}'],
	// serverModuleFormat: 'cjs',
	cacheDirectory: './node_modules/.cache/remix',
	postcss: true,
	tailwind: true,
};
