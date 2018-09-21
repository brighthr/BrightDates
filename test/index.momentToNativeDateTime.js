const { test } = require('ava');

const brightDates = require('../src');

const baseDateTimeEU = '2017-02-17T02:00:00+00:00';
const baseDateTimeCAN = '2017-02-17T02:00:00-04:00';

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"momentToNativeDateTime" should return the correct datetime', t => {
	t.regex(
		brightDates
			.momentToNativeDateTime(brightDates.dateTime(baseDateTimeEU))
			.toString(),
		/Fri Feb 17 2017 02:00:00 GMT\+0000 \(GMT( Standard Time)?\)/
	);
	t.regex(
		brightDates
			.momentToNativeDateTime(brightDates.dateTime(baseDateTimeCAN))
			.toString(),
		/Fri Feb 17 2017 06:00:00 GMT\+0000 \(GMT( Standard Time)?\)/
	);
});
