const { test } = require('ava');
const moment = require('moment');

const brightDates = require('../src');

const baseDateTime = '2017-02-17T00:08:00-06:00';
const baseDateTimeDST = '2017-06-17T07:00:00-06:00';

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"date" should default to today when no date is specified', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');
	const today = moment.tz('Europe/London').startOf('day').format();

	t.is(brightDates.date().format(), today);
});

test('"date" should convert to the default timezone', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.date(baseDateTime).format(), '2017-02-17T00:00:00Z');
	t.is(
		brightDates.date(baseDateTimeDST).format(),
		'2017-06-17T00:00:00+01:00'
	);
});

test('"date" should use the updated user timezone', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');
	brightDates.setTimezone('Canada/Eastern');

	t.is(brightDates.date(baseDateTime).format(), '2017-02-17T00:00:00-05:00');
	t.is(
		brightDates.date(baseDateTimeDST).format(),
		'2017-06-17T00:00:00-04:00'
	);
});

test('"date" should support native dates', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	const nativeDate = new Date(2017, 1, 17, 10, 10, 10);
	const nativeDateDST = new Date(2017, 5, 17, 10, 10, 10);

	t.is(brightDates.date(nativeDate).format(), '2017-02-17T00:00:00Z');
	t.is(brightDates.date(nativeDateDST).format(), '2017-06-17T00:00:00+01:00');
});

test('"date" should support arrays', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	const arrayDate = [2017, 1, 17, 10, 10, 10];
	const arrayDateDST = [2017, 5, 17, 10, 10, 10];

	t.is(brightDates.date(arrayDate).format(), '2017-02-17T00:00:00Z');
	t.is(brightDates.date(arrayDateDST).format(), '2017-06-17T00:00:00+01:00');
});

test('"date" should accept a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');
	t.is(
		brightDates.date(baseDateTime, 'Canada/Eastern').format(),
		'2017-02-17T00:00:00-05:00'
	);
	t.is(
		brightDates.date(baseDateTimeDST, 'Canada/Eastern').format(),
		'2017-06-17T00:00:00-04:00'
	);
});
