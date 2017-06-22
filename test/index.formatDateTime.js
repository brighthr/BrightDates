const { test } = require('ava');

const brightDates = require('../src');

const baseDateTime = '2017-02-17T00:00:00-06:00';
const baseDateTimeDST = '2017-06-17T00:00:00-06:00';

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"formatDateTime" should throw on unrecognised formats', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.throws(() => {
		brightDates.formatDateTime(baseDateTime, 'iwillneverexistlikenever');
	});
});

test('"formatDateTime" should support no format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDateTime(baseDateTime), '2017-02-17T06:00:00Z');
	t.is(
		brightDates.formatDateTime(baseDateTimeDST),
		'2017-06-17T07:00:00+01:00'
	);
});

test('"formatDateTime" should support no format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, null, 'Canada/Eastern'),
		'2017-02-17T01:00:00-05:00'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, null, 'Canada/Eastern'),
		'2017-06-17T02:00:00-04:00'
	);
});

test('"formatDateTime" should support "short" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDateTime(baseDateTime, 'short'), '17/02/2017');
	t.is(brightDates.formatDateTime(baseDateTimeDST, 'short'), '17/06/2017');
});

test('"formatDateTime" should support "short" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'short', 'Canada/Eastern'),
		'17/02/2017'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, 'short', 'Canada/Eastern'),
		'17/06/2017'
	);
});

test('"formatDateTime" should support "api" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDateTime(baseDateTime, 'api'), '2017-02-17');
	t.is(brightDates.formatDateTime(baseDateTimeDST, 'api'), '2017-06-17');
});

test('"formatDateTime" should support "api" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'api', 'Canada/Eastern'),
		'2017-02-17'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, 'api', 'Canada/Eastern'),
		'2017-06-17'
	);
});

test('"formatDateTime" should support "friendly" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'friendly'),
		'Fri 17 February 2017'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, 'friendly'),
		'Sat 17 June 2017'
	);
});

test('"formatDateTime" should support "friendly" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'friendly', 'Canada/Eastern'),
		'Fri 17 February 2017'
	);
	t.is(
		brightDates.formatDateTime(
			baseDateTimeDST,
			'friendly',
			'Canada/Eastern'
		),
		'Sat 17 June 2017'
	);
});

test('"formatDateTime" should support "friendlyShort" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'friendlyShort'),
		'Fri 17 Feb'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, 'friendlyShort'),
		'Sat 17 Jun'
	);
});

test('"formatDateTime" should support "friendlyShort" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(
			baseDateTime,
			'friendlyShort',
			'Canada/Eastern'
		),
		'Fri 17 Feb'
	);
	t.is(
		brightDates.formatDateTime(
			baseDateTimeDST,
			'friendlyShort',
			'Canada/Eastern'
		),
		'Sat 17 Jun'
	);
});

test('"formatDateTime" should support "time" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDateTime(baseDateTime, 'time'), '06:00');
	t.is(brightDates.formatDateTime(baseDateTimeDST, 'time'), '07:00');
});

test('"formatDateTime" should support "time" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'time', 'Canada/Eastern'),
		'01:00'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, 'time', 'Canada/Eastern'),
		'02:00'
	);
});

test('"formatDateTime" should support "datetime" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'datetime'),
		'17/02/2017 06:00'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, 'datetime'),
		'17/06/2017 07:00'
	);
});

test('"formatDateTime" should support "datetime" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'datetime', 'Canada/Eastern'),
		'17/02/2017 01:00'
	);
	t.is(
		brightDates.formatDateTime(
			baseDateTimeDST,
			'datetime',
			'Canada/Eastern'
		),
		'17/06/2017 02:00'
	);
});

test('"formatDateTime" should support "timezone" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDateTime(baseDateTime, 'timezone'), 'GMT');
	t.is(brightDates.formatDateTime(baseDateTimeDST, 'timezone'), 'BST');
});

test('"formatDateTime" should support "timezone" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'timezone', 'Canada/Eastern'),
		'EST'
	);
	t.is(
		brightDates.formatDateTime(
			baseDateTimeDST,
			'timezone',
			'Canada/Eastern'
		),
		'EDT'
	);
});

test('"formatDateTime" should support "offset" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDateTime(baseDateTime, 'offset'), '+00:00');
	t.is(brightDates.formatDateTime(baseDateTimeDST, 'offset'), '+01:00');
});

test('"formatDateTime" should support "offset" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, 'offset', 'Canada/Eastern'),
		'-05:00'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, 'offset', 'Canada/Eastern'),
		'-04:00'
	);
});

test('"formatDateTime" should support an array of formats', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDateTime(baseDateTime, ['time', 'offset']),
		'06:00 +00:00'
	);
	t.is(
		brightDates.formatDateTime(baseDateTimeDST, ['time', 'offset']),
		'07:00 +01:00'
	);
});
