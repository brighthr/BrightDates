const { test } = require('ava');

const dateUtils = require('../src');

const baseDateTime = '2017-02-17T00:08:00-06:00';
const baseDateTimeDST = '2017-06-17T07:00:00-06:00';

test.beforeEach(() => {
	dateUtils.setTimezone('Europe/London');
});

test('"date" should convert to the default timezone', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(dateUtils.date(baseDateTime).format(), '2017-02-17T00:00:00Z');
	t.is(dateUtils.date(baseDateTimeDST).format(), '2017-06-17T00:00:00+01:00');
});

test('"date" should use the updated user timezone', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');
	dateUtils.setTimezone('Canada/Eastern');

	t.is(dateUtils.date(baseDateTime).format(), '2017-02-17T00:00:00-05:00');
	t.is(dateUtils.date(baseDateTimeDST).format(), '2017-06-17T00:00:00-04:00');
});

test('"date" should support native dates', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	const nativeDate = new Date(2017, 1, 17, 10, 10, 10);
	const nativeDateDST = new Date(2017, 5, 17, 10, 10, 10);

	t.is(dateUtils.date(nativeDate).format(), '2017-02-17T00:00:00Z');
	t.is(dateUtils.date(nativeDateDST).format(), '2017-06-17T00:00:00+01:00');
});

test('"date" should accept a timezone overide', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');
	t.is(
		dateUtils.date(baseDateTime, 'Canada/Eastern').format(),
		'2017-02-17T00:00:00-05:00'
	);
	t.is(
		dateUtils.date(baseDateTimeDST, 'Canada/Eastern').format(),
		'2017-06-17T00:00:00-04:00'
	);
});
