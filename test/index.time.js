const { test } = require('ava');
const moment = require('moment');

const brightDates = require('../src');

const baseTime = '19:00';

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"time" should return a moment with the specified time and timezone - Europe/London', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');
	const today = moment
		.tz('Europe/London')
		.set({
			hour: 19,
			minute: 0,
			second: 0
		})
		.format();

	t.is(brightDates.time(baseTime).format(), today);
});

test('"time" should return a moment with the specified time and timezone - Canada/Eastern', t => {
	brightDates.setTimezone('Canada/Eastern');
	t.is(brightDates.getTimezone(), 'Canada/Eastern');
	const today = moment
		.tz('Canada/Eastern')
		.set({
			hour: 19,
			minute: 0,
			second: 0
		})
		.format();

	t.is(brightDates.time(baseTime).format(), today);
});
