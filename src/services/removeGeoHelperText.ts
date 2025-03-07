function removeGeoHelperText() {
	const DOMGeolocationHelperText = document.querySelector(
		'.geolocation h3.geo-helper'
	)! as HTMLHeadingElement;

	if (!DOMGeolocationHelperText.classList.contains('hidden')) {
		DOMGeolocationHelperText.classList.add('hidden');
	}
}

export default removeGeoHelperText;
