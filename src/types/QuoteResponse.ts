type QuoteResponse = Promise<{
	author: string;
	content: string;
} | null>;

export default QuoteResponse;
