import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

export const loader = async ({}: LoaderArgs) => {
	console.log('we are in data')
	const data = await fetch('http://example.com/posts');
	const response = await data.json();
	return json(response, {
		status: 200,
	});
};

