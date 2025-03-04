const DOMGeoDataBtn = document.querySelector(
	'.geodata--btn'
)! as HTMLButtonElement;
const DOMGeoDataCloseBtn = document.querySelector(
	'.geodata--close'
)! as HTMLButtonElement;

const DOMGeolocationContainer = document.querySelector(
	'.geolocation'
)! as HTMLElement;

DOMGeoDataBtn.addEventListener('click', function () {
	DOMGeolocationContainer.classList.add('geolocation-display');
});

DOMGeoDataCloseBtn.addEventListener('click', closeGeoDataMenuBar);
window.addEventListener('keyup', closeGeoDataMenuBar);

function closeGeoDataMenuBar(event: KeyboardEvent | MouseEvent) {
	if (event instanceof KeyboardEvent) {
		if (DOMGeolocationContainer.classList.contains('geolocation-display')) {
			DOMGeolocationContainer.classList.remove('geolocation-display');
		}
	} else if (event instanceof MouseEvent) {
		DOMGeolocationContainer.classList.remove('geolocation-display');
	} else {
		return;
	}
}
