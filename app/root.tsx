import { createHead } from 'remix-island';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import React from 'react';

export const Head = createHead(() => {
	return (
		<>
			<Meta />
			<Links />
		</>
	);
});
export default function App() {
	return (
		<>
			<>
				<Head />
				<div className='border-2 border-black'>
					<h1>Root file</h1>
					<Outlet />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</>
		</>
	);
}
