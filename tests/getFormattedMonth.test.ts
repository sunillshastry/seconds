import { getFormattedMonth } from './../src/utils/time';
import { test, expect } from 'vitest';

// Create list for all valid test inputs
const GET_FORMATTED_MONTH_TEST_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Create list for all expected test results via test inputs
const GET_FORMATTED_MONTH_EXPECTED_VALUES = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

// Automate expected tests using two arrays for valid inputs
GET_FORMATTED_MONTH_TEST_VALUES.forEach(function (testValue, index) {
	test(`src/utils/time.ts: getFormattedMonth(): Month ${testValue < 10 ? `0${testValue}` : testValue}`, function () {
		expect(getFormattedMonth(testValue)).toBe(
			GET_FORMATTED_MONTH_EXPECTED_VALUES[index]
		);
	});
});
