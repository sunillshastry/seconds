const DOMUserCity = document.querySelector(
	'#greeting--location'
)! as HTMLSpanElement;

function setCityOnHome(city: string) {
	DOMUserCity.textContent = city;
}

export default setCityOnHome;
