import { getTimePeriodGreeting } from './../src/utils/time';
import { expect, test } from 'vitest';

// Testing for 'morning' times
test('Testing getTimePeriodGreeting(): morning (1/3)', function () {
	expect(getTimePeriodGreeting(1)).toBe('morning');
});

test('Testing getTimePeriodGreeting(): morning (2/3)', function () {
	expect(getTimePeriodGreeting(0)).toBe('morning');
});

test('src/utils/time.ts: getTimePeriodGreeting(): morning (3/3)', function () {
	expect(getTimePeriodGreeting(12)).not.toBe('morning');
});
