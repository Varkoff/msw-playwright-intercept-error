import { RemixBrowser } from '@remix-run/react';
import { startTransition } from 'react';
// import { StrictMode } from "react";
import { hydrateRoot } from 'react-dom/client';

function hydrate() {
	startTransition(() => {
		hydrateRoot(
			document.getElementById('root')!,
			// <StrictMode>
			<RemixBrowser />
			// </StrictMode>
		);
	});
}

if (window.requestIdleCallback) {
	window.requestIdleCallback(hydrate);
} else {
	// Safari doesn't support requestIdleCallback
	// https://caniuse.com/requestidlecallback
	window.setTimeout(hydrate, 1);
}
