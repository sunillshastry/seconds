import { getUserTime } from '../utils/time';
import GetUserTime from '../schema/GetUserTime';

const DOMGreetingTime = document.querySelector(
	'#greeting--time'
)! as HTMLHeadingElement;
const DOMGreetingDate = document.querySelector(
	'#greeting--date'
)! as HTMLHeadingElement;

const DOMGreetingMessage = document.querySelector(
	'.greeting--primary'
)! as HTMLHeadingElement;

function setTimeToUserUI() {
	const currentUserTime = getUserTime();
	const userTimeZodParse = GetUserTime.safeParse(currentUserTime);
	if (userTimeZodParse.success) {
		const { date, month, year, hours, minutes, isPostMeridian, greeting } =
			userTimeZodParse.data;

		// Set the greeting message
		DOMGreetingMessage.textContent = `Good ${greeting}, it is currently`;

		// Set the current time
		DOMGreetingTime.textContent = `${hours < 10 ? `0${hours}` : hours}:${
			minutes < 10 ? `0${minutes}` : minutes
		} ${isPostMeridian ? 'pm' : 'am'}`;

		// Set the current date
		DOMGreetingDate.textContent = `${month} ${
			date < 10 ? `0${date}` : date
		}, ${year}`;
	}
}

setTimeToUserUI();
setInterval(setTimeToUserUI, 1000);
