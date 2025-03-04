import { z } from 'zod';

const GetUserTime = z.object({
	date: z.number(),
	month: z.string(),
	year: z.number(),
	hours: z.number(),
	minutes: z.number(),
	isPostMeridian: z.boolean(),
	greeting: z.string(),
});

export default GetUserTime;
