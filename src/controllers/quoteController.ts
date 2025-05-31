import { getRandomQuote } from '../utils/quote';

const DOMQuoteTitle = document.querySelector('#quote')! as HTMLSpanElement;
const DOMQuoteAuthor = document.querySelector(
	'.quote h3'
)! as HTMLHeadingElement;
const quoteURLEndpoint: string = import.meta.env.VITE_QUOTE_URI;

if (!quoteURLEndpoint) {
	if (import.meta.env.VITE_NODE_ENV === 'development') {
		console.log('env.QUOTE_URI is currently undefined');
	} else {
		alert(
			'Failed to fetch geo data due to an internal error in the third-party API'
		);
	}
}

async function setupQuoteDisplay(url: string | undefined): Promise<void> {
	const { author, content } = (await getRandomQuote(url as string)) ?? {
		author: 'Unavailable',
		content: 'Unavailable',
	};
	DOMQuoteTitle.textContent = content;
	DOMQuoteAuthor.textContent = author;

	if (author !== 'Unavailable' && content !== 'Unavailable') {
		setInterval(
			async function () {
				const { author, content } = (await getRandomQuote(url as string)) ?? {
					author: 'Unknown',
					content: 'N/A',
				};

				DOMQuoteTitle.style.opacity = '0';
				DOMQuoteAuthor.style.opacity = '0';

				setTimeout(
					function () {
						DOMQuoteTitle.textContent = content;
						DOMQuoteAuthor.textContent = author;

						DOMQuoteTitle.style.opacity = '1';
						DOMQuoteAuthor.style.opacity = '1';
					},
					import.meta.env.VITE_QUOTE_HIDE_DELAY || 500
				);
			},
			import.meta.env.VITE_QUOTE_DELAY || 6000
		);
	}
}

setupQuoteDisplay(quoteURLEndpoint);
