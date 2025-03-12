import GetUserTime from '../schema/GetUserTime';
import { z } from 'zod';

function getUserTime(): z.infer<typeof GetUserTime> {
	const currentDate = new Date();
	const date = currentDate.getDate();
	const unformattedMonth = currentDate.getMonth() + 1;
	const year = currentDate.getFullYear();
	const unformattedHours = currentDate.getHours();
	const minutes = currentDate.getMinutes();

	const hours = getFormattedHours(unformattedHours);
	const month = getFormattedMonth(unformattedMonth);

	const isPostMeridian = unformattedHours >= 12 && unformattedHours < 24;

	return {
		date,
		month,
		year,
		hours,
		minutes,
		isPostMeridian,
		greeting: getTimePeriodGreeting(unformattedHours),
	};
}

function getTimePeriodGreeting(currentHour: number) {
	if (currentHour >= 0 && currentHour < 12) {
		return 'morning';
	} else if (currentHour >= 12 && currentHour < 18) {
		return 'afternoon';
	} else if (currentHour >= 18 && currentHour < 24) {
		return 'evening';
	}
	return '';
}

function getFormattedMonth(month: number): string {
	switch (month) {
		case 1:
			return 'Jan';
		case 2:
			return 'Feb';
		case 3:
			return 'Mar';
		case 4:
			return 'Apr';
		case 5:
			return 'May';
		case 6:
			return 'Jun';
		case 7:
			return 'Jul';
		case 8:
			return 'Aug';
		case 9:
			return 'Sep';
		case 10:
			return 'Oct';
		case 11:
			return 'Nov';
		case 12:
			return 'Dec';
		default:
			return '';
	}
}

function getFormattedHours(hours: number): number {
	switch (hours) {
		case 1:
		case 13:
			return 1;
		case 2:
		case 14:
			return 2;
		case 3:
		case 15:
			return 3;
		case 4:
		case 16:
			return 4;
		case 5:
		case 17:
			return 5;
		case 6:
		case 18:
			return 6;
		case 7:
		case 19:
			return 7;
		case 8:
		case 20:
			return 8;
		case 9:
		case 21:
			return 9;
		case 10:
		case 22:
			return 10;
		case 11:
		case 23:
			return 11;
		case 12:
		case 24:
		case 0:
			return 12;
		default:
			return -1;
	}
}

export {
	getUserTime,
	getTimePeriodGreeting,
	getFormattedMonth,
	getFormattedHours,
};
