import { zStr } from '../schema/zStr';

async function getRandomQuote(quoteUrl: string | undefined) {
	if (zStr.parse(quoteUrl)) {
		const responsePromise = await fetch(quoteUrl as string);
		const { author, content } = await responsePromise.json();
		return { author, content };
	} else {
		return null;
	}
}

export default getRandomQuote;
