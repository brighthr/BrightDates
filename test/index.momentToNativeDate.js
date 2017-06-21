const { test } = require('ava');

const brightDates = require('../src');

const baseDateTimeEU = '2017-02-17T00:00:00+00:00';
const baseDateTimeCAN = '2017-02-17T00:00:00-04:00';

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"momentToNativeDate" should return the correct date', t => {
	t.is(
		brightDates
			.momentToNativeDate(brightDates.date(baseDateTimeEU))
			.toString(),
		'Fri Feb 17 2017 00:00:00 GMT+0000 (GMT)'
	);
	t.is(
		brightDates
			.momentToNativeDate(brightDates.date(baseDateTimeCAN))
			.toString(),
		'Fri Feb 17 2017 00:00:00 GMT+0000 (GMT)'
	);
});
