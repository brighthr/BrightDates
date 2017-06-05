const { test } = require('ava');

const brightDates = require('../src');

test('"getTimezone" should be "Europe/London" by default', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');
});

test('"setTimezone" should update the user timezone', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');
	brightDates.setTimezone('Canada/Eastern');
	t.is(brightDates.getTimezone(), 'Canada/Eastern');
});
