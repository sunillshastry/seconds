import { getUserTime } from '../src/utils/time';
import { expect, test } from 'vitest';

// Testing whether getUserTime method has the 'date' property
test('src/utils/time.ts: getUserTime()', function () {
	expect(getUserTime()).toHaveProperty('date');
});
