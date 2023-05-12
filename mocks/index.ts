import { rest } from 'msw';
import { setupServer } from 'msw/node';
import closeWithGrace from 'close-with-grace';
const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
// if (!BACKEND_URL) throw new Error('set env');

// process.env.REMIX_DEV_HTTP_ORIGIN
const handlers = [
	rest.get(`http://example.com/posts`, async (req, res, ctx) => {
		console.log('Intercepting Posts !');
		return res(
			// Respond with a 200 status code
			ctx.json([
				{
					id: 18,
					name: 'Mocked post',
				},
			]),
			ctx.status(200)
		);
	}),
];

const server = setupServer(...handlers);

server.listen({ onUnhandledRequest: 'warn' });
console.info({ start: '🔶 Mock server installed', BACKEND_URL });

closeWithGrace(() => {
	server.close();
});
