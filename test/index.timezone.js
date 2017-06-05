const { test } = require('ava');

const dateUtils = require('../src');

test('"getTimezone" should be "Europe/London" by default', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');
});

test('"setTimezone" should update the user timezone', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');
	dateUtils.setTimezone('Canada/Eastern');
	t.is(dateUtils.getTimezone(), 'Canada/Eastern');
});
