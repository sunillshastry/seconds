// const geodataURLEndpoint =
// 	import.meta.env.VITE_GEODATA_ENDPOINT ||
// 	'https://nominatim.openstreetmap.org/reverse';

import { fetchUserCurrentLocation } from '../utils/geolocation';

window.navigator.geolocation.getCurrentPosition(
	handleGeoNavigateSuccess,
	handleGeoNavigateFailure
);

function handleGeoNavigateSuccess(position) {}

function handleGeoNavigateFailure() {}
