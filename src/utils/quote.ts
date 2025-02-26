async function getRandomQuote(quoteUrl: string | undefined) {
	const responsePromise = await fetch(quoteUrl as string);
	const { author, content } = await responsePromise.json();
	return { author, content };
}

export default getRandomQuote;
