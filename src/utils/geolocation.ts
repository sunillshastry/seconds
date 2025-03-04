// const geodataURLEndpoint =
// 	import.meta.env.VITE_GEODATA_ENDPOINT ||
// 	'https://nominatim.openstreetmap.org/reverse';

async function fetchUserCurrentLocation(
	URL: string,
	latitude: number,
	longitude: number
) {
	const queriedUrlEndpoint = `${URL}?lat=${latitude}&lon=${longitude}&format=json&extratags=1&namedetails=1`;
	const fetchResponse = await fetch(queriedUrlEndpoint);
	const responseData = await fetchResponse.json();
	console.log(responseData);
	return responseData;
}

export { fetchUserCurrentLocation };
