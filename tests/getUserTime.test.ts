import { getUserTime } from '../src/utils/time';
import { assert, expect, expectTypeOf, test } from 'vitest';

// Testing whether getUserTime method has the 'date' property
test("src/utils/time.ts: getUserTime() [does method have 'date' property]", function () {
	expect(getUserTime()).toHaveProperty('date');
});

// Testing whether getUserTime method has the 'month' property
test("src/utils/time.ts: getUserTime() [does method have 'month' property]", function () {
	expect(getUserTime()).toHaveProperty('month');
});

// Testing whether getUserTime method has the 'year' property
test("src/utils/time.ts: getUserTime() [does method have 'year' property]", function () {
	expect(getUserTime()).toHaveProperty('year');
});

// Testing whether getUserTime method has the 'hours' property
test("src/utils/time.ts: getUserTime() [does method have 'hours' property]", function () {
	expect(getUserTime()).toHaveProperty('hours');
});

// Testing whether getUserTime method has the 'minutes' property
test("src/utils/time.ts: getUserTime() [does method have the 'minutes' property]", function () {
	expect(getUserTime()).toHaveProperty('minutes');
});

// Testing whether getUserTime method has the 'isPostMeridian' property
test("src/utils/time.ts: getUserTime() [does method have the 'isPostMeridian' property]", function () {
	expect(getUserTime()).toHaveProperty('isPostMeridian');
});

// Testing whether getUserTime method has the 'greeting' function property
test("src/utils/time.ts: getUserTime() [does method have the 'greeting()' property", function () {
	expect(getUserTime()).toHaveProperty('greeting');
});

// Checking for null or undefined 'date' values & checking for its type
test("src/utils/time.ts: getUserTime(): Checking the 'date' type and value for null or undefined", function () {
	const { date } = getUserTime();
	expectTypeOf(date).toBeNumber();
	assert.isDefined(date, 'getUserTime.date is undefined');
	assert.isNotNull(date, 'getUserTime.date is null');
});

// Checking for null or undefined 'month' values & checking for its type
test("src/utils/time.ts: getUserTime(): Checking the 'month' type and value for null or undefined", function () {
	const { month } = getUserTime();
	expectTypeOf(month).toBeString();
	assert.isDefined(month, 'getUserTime.month is undefined');
	assert.isNotNull(month, 'getUserTime.month is null');
});
