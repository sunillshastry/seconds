import axios from 'axios';

async function fetchUserCurrentLocation(
	URL: string,
	latitude: number,
	longitude: number
) {
	try {
		const queriedUrlEndpoint = `${URL}?lat=${latitude}&lon=${longitude}&format=json&extratags=1&namedetails=1`;
		const fetchResponse = await axios.get(queriedUrlEndpoint);
		return fetchResponse.data;
	} catch (e) {
		if (import.meta.env.VITE_NODE_ENV === 'development') {
			console.log('Failed to user location from geolocation API');
			console.log(e);
		} else {
			alert('Failed to fetch location from geolocation API');
		}
		return null;
	}
}

export { fetchUserCurrentLocation };
