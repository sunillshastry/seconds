import { getTimePeriodGreeting } from './../src/utils/time';
import { expect, test } from 'vitest';

test('Testing getTimePeriodGreeting(): morning', function () {
	expect(getTimePeriodGreeting(1)).toBe('morning');
});
