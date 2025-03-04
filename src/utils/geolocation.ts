import axios from 'axios';

async function fetchUserCurrentLocation(
	URL: string,
	latitude: number,
	longitude: number
) {
	const queriedUrlEndpoint = `${URL}?lat=${latitude}&lon=${longitude}&format=json&extratags=1&namedetails=1`;
	const fetchResponse = await axios.get(queriedUrlEndpoint);
	return fetchResponse.data;
}

export { fetchUserCurrentLocation };
