async function fetchUserCurrentLocation(
	URL: string,
	latitude: number,
	longitude: number
) {
	const queriedUrlEndpoint = `${URL}?lat=${latitude}&lon=${longitude}&format=json&extratags=1&namedetails=1`;
	const fetchResponse = await fetch(queriedUrlEndpoint);
	const responseData = await fetchResponse.json();
	return responseData;
}

export { fetchUserCurrentLocation };
