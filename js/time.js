// Time API

const timeGreeting = document.getElementById("time-greeting");
const timeValue = document.querySelector(".greeting-time");
const monthValue = document.querySelector(".greeting-month");

function getTime() {
	const timeObj = new Date();
	const date = timeObj.getDate();
	const month = timeObj.getMonth() + 1;
	const year = timeObj.getFullYear();
	const minutes = timeObj.getMinutes();
	const hours = timeObj.getHours();
	return {
		date,
		month,
		year,
		minutes,
		hours
	};
}

function timeGenerator() {
	setInterval(setTimeToDisplay, 1000);
}

function setTimeToDisplay() {
	let timeStatus = "";
	const currentTime = getTime();
	const { date, month, year, minutes, hours } = currentTime;
	hours > 12 ? (timeStatus = "PM") : (timeStatus = "AM");
	let customHourValue = timeSwitcher(hours);
	customHourValue = customValueImplementor(customHourValue);
	let customMinutesValue = customValueImplementor(minutes);
	let customDateValue = customValueImplementor(date);
	let customMonthValue = customValueImplementor(month);
	timeValue.innerHTML = `${customHourValue}:${customMinutesValue} ${timeStatus}`;
	monthValue.innerHTML = `${customDateValue} / ${customMonthValue} / ${year}`;

	const greetValue = userGreeting(hours);
	if (greetValue === "morning") {
		timeGreeting.innerHTML = `<i class="fas fa-sun"></i>  Good ${greetValue}`;
	} else if (greetValue === "afternoon") {
		timeGreeting.innerHTML = `<i class="fas fa-cloud-sun"></i>  Good ${greetValue}`;
	} else if (greetValue === "evening") {
		timeGreeting.innerHTML = `<i class="fas fa-cloud-moon"></i> Good ${greetValue}`;
	}
}

function userGreeting(hoursValue) {
	let val = "";
	if (hoursValue >= 12) {
		val = "afternoon";
	} else if (hoursValue >= 18) {
		val = "evening";
	} else if (hoursValue >= 24 && hoursValue < 12) {
		val = "morning";
	}
	return val;
}

function customValueImplementor(value) {
	value = value < 10 ? `0${value}` : value;
	return value;
}

setTimeToDisplay();
timeGenerator();
function timeSwitcher(hourValue) {
	let hour;
	switch (hourValue) {
		case 13:
			hour = 1;
			break;
		case 14:
			hour = 2;
			break;
		case 15:
			hour = 3;
			break;
		case 16:
			hour = 4;
			break;
		case 17:
			hour = 5;
			break;
		case 18:
			hour = 6;
			break;
		case 19:
			hour = 7;
			break;
		case 20:
			hour = 8;
			break;
		case 21:
			hour = 9;
			break;
		case 22:
			hour = 10;
			break;
		case 23:
			hour = 11;
			break;
		case 24:
			hour = 12;
			break;
		default:
			hour = "not-valid";
	}
	return hour;
}
