import { getTimePeriodGreeting } from './../src/utils/time';
import { expect, test } from 'vitest';

// Testing for 'morning' times
test('src/utils/time.ts: getTimePeriodGreeting(): morning (1/3)', function () {
	expect(getTimePeriodGreeting(1)).toBe('morning');
});

test('src/utils/time.ts: getTimePeriodGreeting(): morning (2/3)', function () {
	expect(getTimePeriodGreeting(0)).toBe('morning');
});

test('src/utils/time.ts: getTimePeriodGreeting(): morning (3/3)', function () {
	expect(getTimePeriodGreeting(12)).not.toBe('morning');
});

// Testing for 'afternoon' times
test('src/utils/time.ts: getTimePeriodGreeting(): afternoon (1/3)', function () {
	expect(getTimePeriodGreeting(12)).toBe('afternoon');
});

test('src/utils/time.ts: getTimePeriodGreeting(): afternoon (2/3)', function () {
	expect(getTimePeriodGreeting(15)).toBe('afternoon');
});

test('src/utils/time.ts: getTimePeriodGreeting(): afternoon (3/3)', function () {
	expect(getTimePeriodGreeting(18)).not.toBe('afternoon');
});

// Testing for 'evening' times
test('src/utils/time.ts: getTimePeriodGreeting(): evening (1/3)', function () {
	expect(getTimePeriodGreeting(18)).toBe('evening');
});

test('src/utils/time.ts: getTimePeriodGreeting(): evening (2/3)', function () {
	expect(getTimePeriodGreeting(20)).toBe('evening');
});
