import { zStr } from '../schema/zStr';
import QuoteResponse from '../types/QuoteResponse';
import axios from 'axios';

async function getRandomQuote(quoteUrl: string | undefined): QuoteResponse {
	if (zStr.parse(quoteUrl)) {
		const responsePromise = await axios.get(quoteUrl as string);
		const { author, content } = responsePromise.data;
		return { author, content };
	} else {
		return null;
	}
}

export default getRandomQuote;
