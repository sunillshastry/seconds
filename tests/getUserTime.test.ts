import { getUserTime } from '../src/utils/time';
import { expect, test } from 'vitest';

// Testing whether getUserTime method has the 'date' property
test('src/utils/time.ts: getUserTime()', function () {
	expect(getUserTime()).toHaveProperty('date');
});

// Testing whether getUserTime method has the 'month' property
test("src/utils/time.ts: getUserTime() [does method have 'month' property]", function () {
	expect(getUserTime()).toHaveProperty('month');
});
