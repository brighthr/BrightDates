const { test } = require('ava');

const brightDates = require('../src');

const baseDateTime = '2017-02-17T00:00:00-06:00';
const baseDateTimeDST = '2017-06-17T00:00:00-06:00';

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"dateTime" should convert to the default timezone', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.dateTime(baseDateTime).format(), '2017-02-17T06:00:00Z');
	t.is(
		brightDates.dateTime(baseDateTimeDST).format(),
		'2017-06-17T07:00:00+01:00'
	);
});

test('"dateTime" should use the updated user timezone', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');
	brightDates.setTimezone('Canada/Eastern');

	t.is(
		brightDates.dateTime(baseDateTime).format(),
		'2017-02-17T01:00:00-05:00'
	);
	t.is(
		brightDates.dateTime(baseDateTimeDST).format(),
		'2017-06-17T02:00:00-04:00'
	);
});

test('"dateTime" should support native dates', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	const nativeDate = new Date(2017, 1, 17, 10, 10, 10);
	const nativeDateDST = new Date(2017, 6, 17, 10, 10, 10);

	t.is(brightDates.dateTime(nativeDate).format(), '2017-02-17T10:10:10Z');
	t.is(
		brightDates.dateTime(nativeDateDST).format(),
		'2017-07-17T10:10:10+01:00'
	);
});

test('"dateTime" should accept a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');
	t.is(
		brightDates.dateTime(baseDateTime, 'Canada/Eastern').format(),
		'2017-02-17T01:00:00-05:00'
	);
	t.is(
		brightDates.dateTime(baseDateTimeDST, 'Canada/Eastern').format(),
		'2017-06-17T02:00:00-04:00'
	);
});
