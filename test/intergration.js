const { test } = require('ava');
const moment = require('moment');

const brightDates = require('../src');

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('work the same as moment', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.date().format(),
		moment
			.tz('Europe/London')
			.startOf('day')
			.format()
	);

	t.is(
		brightDates.date('2018-08-09').format(),
		moment
			.tz('2018-08-09', 'Europe/London')
			.startOf('day')
			.format()
	);

	t.is(
		brightDates.dateTime('2018-08-09T01:09:01').format(),
		moment.tz('2018-08-09T01:09:01', 'Europe/London').format()
	);

	t.is(
		brightDates.date(null).format(),
		moment
			.tz(null, 'Europe/London')
			.startOf('day')
			.format()
	);

	t.is(
		brightDates.date(undefined).format(),
		moment
			.tz(undefined, 'Europe/London')
			.startOf('day')
			.format()
	);

	t.is(
		brightDates.dateTime(null).format(),
		moment.tz(null, 'Europe/London').format()
	);

	t.is(
		brightDates.dateTime(undefined).format(),
		moment.tz(undefined, 'Europe/London').format()
	);
});

test('exported moment functions', t => {
	const left = brightDates.date('2018-08-01');
	const right = brightDates.date('2018-08-02');

	t.is(brightDates.min(left, right), moment.min(left, right));

	t.is(brightDates.max(left, right), moment.max(left, right));

	t.deepEqual(brightDates.months(), moment.months());

	t.deepEqual(brightDates.monthsShort(), moment.monthsShort());

	t.deepEqual(brightDates.weekdays(), moment.weekdays());

	t.deepEqual(brightDates.weekdaysShort(), moment.weekdaysShort());

	t.deepEqual(brightDates.weekdaysMin(), moment.weekdaysMin());
});
