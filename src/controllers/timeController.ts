import { getUserTime } from '../utils/time';

const DOMGreetingTime = document.querySelector(
	'#greeting--time'
)! as HTMLHeadingElement;
const DOMGreetingDate = document.querySelector(
	'#greeting--date'
)! as HTMLHeadingElement;

// const DOMGreetingLocation = document.querySelector(
// 	'#greeting--location'
// )! as HTMLSpanElement;

function setTimeToUserUI() {
	const { date, month, year, hours, minutes, isPostMeridian } = getUserTime();
	// Set the current time
	DOMGreetingTime.textContent = `${hours < 10 ? `0${hours}` : hours}:${
		minutes < 10 ? `0${minutes}` : minutes
	} ${isPostMeridian ? 'pm' : 'am'}`;

	// Set the current date
	DOMGreetingDate.textContent = `${month} ${
		date < 10 ? `0${date}` : date
	}, ${year}`;
}

setTimeToUserUI();
setInterval(setTimeToUserUI, 1000);
