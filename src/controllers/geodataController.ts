import { z } from 'zod';
import { fetchUserCurrentLocation } from '../utils/geolocation';
import GeoData from '../schema/GeoData';
import entityIconHandler from '../services/entityIconHandler';
import formatObjectKeyName from '../services/formatObjectKey';
import handleNonFriendlyName from '../services/handleNonFriendlyName';
import setCityOnHome from '../services/setCityOnHome';
import removeGeoHelperText from '../services/removeGeoHelperText';

const geoDataURLEndpoint = import.meta.env.VITE_GEODATA_ENDPOINT;
if (!geoDataURLEndpoint) {
	if (import.meta.env.VITE_NODE_ENV === 'development') {
		console.log('env.GEODATA_ENDPOINT is currently undefined');
	} else {
		alert(
			'Failed to fetch geo data due to an internal error in the third-party API'
		);
	}
}

const DOMGeolocationContainer = document.querySelector(
	'.geolocation'
)! as HTMLElement;

window.navigator.geolocation.getCurrentPosition(
	handleGeoNavigateSuccess,
	handleGeoNavigateFailure
);

async function handleGeoNavigateSuccess(position: GeolocationPosition) {
	const { latitude, longitude } = position.coords as GeolocationCoordinates;
	const fetchResponseData: z.infer<typeof GeoData> =
		await fetchUserCurrentLocation(geoDataURLEndpoint, latitude, longitude);

	if (!fetchResponseData?.address || !fetchResponseData?.display_name) {
		handleGeoNavigateFailure();
	} else {
		setupUsersGeoDataUI(fetchResponseData);
	}
}

function handleGeoNavigateFailure() {
	console.log("Error: Unable to access user's current location coordinates");
}

function setupUsersGeoDataUI(responseData: z.infer<typeof GeoData>) {
	const { address: userLocationAddress } = responseData;
	if (userLocationAddress) {
		// Remove 'No geolocation data' header text from geolocation tab
		removeGeoHelperText();
	}
	for (const objectKey in userLocationAddress) {
		if (Object.keys(userLocationAddress).includes(objectKey)) {
			if (objectKey === 'city') {
				setCityOnHome(
					userLocationAddress[
						objectKey as keyof typeof userLocationAddress
					] as string
				);
			}
			const HTMLGeoEntityTemplate = `
			<div class="geolocation__entity">
				<h4>
					<span>${
						objectKey.includes('ISO')
							? handleNonFriendlyName(objectKey)
							: formatObjectKeyName(objectKey)
					}</span>
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
