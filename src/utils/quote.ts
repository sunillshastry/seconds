import { zStr } from '../schema/zStr';
import QuoteResponse from '../types/QuoteResponse';
import axios from 'axios';

async function getRandomQuote(quoteUrl: string | undefined): QuoteResponse {
	if (zStr.parse(quoteUrl)) {
		try {
			const responsePromise = await axios.get(quoteUrl as string, {
				headers: {
					'X-Api-Ke': import.meta.env.VITE_QUOTE_API_KEY,
				},
			});
			const { author, quote: content } = responsePromise.data[0];
			return { author, content };
		} catch (e) {
			if (import.meta.env.VITE_NODE_ENV === 'development') {
				console.log('Failed to fetch data from randomQuote API');
				console.log(e);
			} else {
				alert('Failed to fetch random quote from API');
			}
			return null;
		}
	} else {
		return null;
	}
}

export { getRandomQuote };
