const { test } = require('ava');

const brightDates = require('../src');

const baselocalDateTime = '2017-02-17T06:00:00';

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"localDateTime" should convert to machine', t => {
	t.is(
		brightDates.localDateTime(baselocalDateTime).format(),
		'2017-02-17T06:00:00+00:00'
	);
});

test('"localDateTime" should support native dates', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	const nativeDate = new Date(2017, 1, 17, 10, 10, 10);
	const nativeDateDST = new Date(2017, 6, 17, 10, 10, 10);

	t.is(
		brightDates.localDateTime(nativeDate).format(),
		'2017-02-17T10:10:10+00:00'
	);
	t.is(
		brightDates.localDateTime(nativeDateDST).format(),
		'2017-07-17T10:10:10+01:00'
	);
});
