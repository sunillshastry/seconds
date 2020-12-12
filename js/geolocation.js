// GEOLOCATION API

const key = "a81a7f29b99b4ee686bb98e570ef1204";
const greetingLocation = document.querySelector(".greeting-location");
const cityDistrict = document.getElementById("city-district");
const stateDistrict = document.getElementById("state-district");
const postCode = document.getElementById("post-code");
const stcCode = document.getElementById("stc-code");

window.navigator.geolocation.getCurrentPosition(async function (pos) {
	if (pos) {
		const { coords } = pos;
		const { latitude, longitude } = coords;
		const userData = await fetchUserLocation(latitude, longitude);
		const { results } = userData;
		greetingLocation.innerHTML = `${results[0].components.city}, ${results[0].components.country}.`;
		cityDistrict.innerHTML = `${results[0].components.city_district}, ${results[0].components.county}`;
		stateDistrict.innerHTML = results[0].components.state_district;
		postCode.innerHTML = results[0].components.postcode;
		stcCode.innerHTML = `${
			results[0].components.state_code
		} - ${results[0].components.country_code.toUpperCase()}`;
	}
});

async function fetchUserLocation(lat, long) {
	const res = await fetch(
		`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=a81a7f29b99b4ee686bb98e570ef1204`
	);
	const data = await res.json();
	return data;
}
