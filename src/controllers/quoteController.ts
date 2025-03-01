import getRandomQuote from '../utils/quote';

const DOMQuoteTitle = document.querySelector('#quote')! as HTMLSpanElement;
const DOMQuoteAuthor = document.querySelector(
	'.quote h3'
)! as HTMLHeadingElement;
const quoteURLEndpoint: string =
	import.meta.env.VITE_QUOTES_ENDPOINT || `https://api.quotable.io/random`;

function setupQuoteDisplay(url: string | undefined): void {
	setInterval(async function () {
		const { author, content } = (await getRandomQuote(url as string)) ?? {
			author: 'Unknown',
			content: 'N/A',
		};

		DOMQuoteTitle.style.opacity = '0';
		DOMQuoteAuthor.style.opacity = '0';

		setTimeout(function () {
			DOMQuoteTitle.textContent = content;
			DOMQuoteAuthor.textContent = author;

			DOMQuoteTitle.style.opacity = '1';
			DOMQuoteAuthor.style.opacity = '1';
		}, import.meta.env.VITE_QUOTE_HIDE_DELAY || 500);
	}, import.meta.env.VITE_QUOTE_DELAY || 6000);
}

setupQuoteDisplay(quoteURLEndpoint);
