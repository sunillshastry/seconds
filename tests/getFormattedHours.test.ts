import { getFormattedHours } from './../src/utils/time';
import { assert, expect, expectTypeOf, test } from 'vitest';

const FORMATTED_HOURS_TEST_VALUES: number[] = [];
for (let i = 1; i < 25; i++) {
	FORMATTED_HOURS_TEST_VALUES.push(i);
}
const FORMATTED_HOURS_EXPECTED_VALUES = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];

FORMATTED_HOURS_TEST_VALUES.forEach(function (currentHour, index) {
	return test('src/utils/time.ts: getFormattedHours(): Testing every hour value (1-24).', function () {
		const resultTestValue = FORMATTED_HOURS_EXPECTED_VALUES[index];
		expect(getFormattedHours(currentHour)).toBe(resultTestValue);
		expectTypeOf(getFormattedHours(currentHour)).toBeNumber();
		assert.isDefined(getFormattedHours(currentHour));
		assert.isNotNull(getFormattedHours(currentHour));
	});
});

// Manual error testing
test('src/utils/time.ts: getFormattedHours(): Testing for case: -1', function () {
	expect(getFormattedHours(-1)).toBe(-1);
	expectTypeOf(getFormattedHours(-1)).toBeNumber();
	assert.isDefined(getFormattedHours(-1));
	assert.isNotNull(getFormattedHours(-1));
});
