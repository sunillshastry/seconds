import { z } from 'zod';

const GeoData = z.object({
	display_name: z.string().optional(),
	address: z
		.object({
			house_number: z.string().optional(),
			road: z.string().optional(),
			neighbourhood: z.string().optional(),
			suburb: z.string().optional(),
			city: z.string().optional(),
			state: z.string().optional(),
			postcode: z.string().optional(),
			country: z.string().optional(),
			country_code: z.string().optional(),
			'ISO3166-2-lvl4': z.string().optional(),
			county: z.string().optional(),
			state_district: z.string().optional(),
		})
		.optional(),
});

export default GeoData;
