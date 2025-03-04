import { z } from 'zod';
import { fetchUserCurrentLocation } from '../utils/geolocation';
import GeoData from '../schema/GeoData';
import entityIconHandler from '../services/entityIconHandler';

const geoDataURLEndpoint =
	import.meta.env.VITE_GEODATA_ENDPOINT ||
	'https://nominatim.openstreetmap.org/reverse';

const DOMGeolocationContainer = document.querySelector(
	'.geolocation'
)! as HTMLElement;

window.navigator.geolocation.getCurrentPosition(
	handleGeoNavigateSuccess,
	handleGeoNavigateFailure
);

async function handleGeoNavigateSuccess(position: GeolocationPosition) {
	const { latitude, longitude } = position.coords as GeolocationCoordinates;
	// const fetchResponseData = await fetchUserCurrentLocation(
	// 	geoDataURLEndpoint,
	// 	latitude,
	// 	longitude
	// );
	// setupUsersGeoDataUI(fetchResponseData);
}

function handleGeoNavigateFailure() {
	console.log("Error: Unable to access user's current location coordinates");
}

function setupUsersGeoDataUI(responseData: z.infer<typeof GeoData>) {
	const { address: userLocationAddress } = responseData;
	for (const objectKey in userLocationAddress) {
		if (Object.keys(userLocationAddress).includes(objectKey)) {
			const HTMLGeoEntityTemplate = `
			<div class="geolocation__entity">
				<h4>
					<span>${objectKey}</span>
					<span>${entityIconHandler(objectKey)}</span>
				</h4>
				<h3>${userLocationAddress[objectKey as keyof typeof userLocationAddress]}</h3>
			</div>
		`;
			const geolocationDivEntity = document
				.createRange()
				.createContextualFragment(HTMLGeoEntityTemplate);
			DOMGeolocationContainer.appendChild(geolocationDivEntity);
		}
	}
}
