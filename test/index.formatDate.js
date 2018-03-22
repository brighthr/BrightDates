const { test } = require('ava');

const brightDates = require('../src');

const baseDateTime = '2017-02-17T00:00:00-06:00';
const baseDateTimeDST = '2017-06-17T00:00:00-06:00';

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"formatDate" should throw on unrecognised formats', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.throws(() => {
		brightDates.formatDate(baseDateTime, 'iwillneverexistlikenever');
	});
});

test('"formatDate" should support no format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDate(baseDateTime), '2017-02-17');
	t.is(brightDates.formatDate(baseDateTimeDST), '2017-06-17');
});

test('"formatDate" should support no format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, null, 'Canada/Eastern'),
		'2017-02-17'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, null, 'Canada/Eastern'),
		'2017-06-17'
	);
});

test('"formatDate" should support "short" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDate(baseDateTime, 'short'), '17/02/2017');
	t.is(brightDates.formatDate(baseDateTimeDST, 'short'), '17/06/2017');
});

test('"formatDate" should support "short" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, 'short', 'Canada/Eastern'),
		'17/02/2017'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'short', 'Canada/Eastern'),
		'17/06/2017'
	);
});

test('"formatDate" should support "api" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDate(baseDateTime, 'api'), '2017-02-17');
	t.is(brightDates.formatDate(baseDateTimeDST, 'api'), '2017-06-17');
});

test('"formatDate" should support "api" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, 'api', 'Canada/Eastern'),
		'2017-02-17'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'api', 'Canada/Eastern'),
		'2017-06-17'
	);
});

test('"formatDate" should support "friendly" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, 'friendly'),
		'Friday 17 February 2017'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'friendly'),
		'Saturday 17 June 2017'
	);
});

test('"formatDate" should support "friendly" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, 'friendly', 'Canada/Eastern'),
		'Friday 17 February 2017'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'friendly', 'Canada/Eastern'),
		'Saturday 17 June 2017'
	);
});

test('"formatDate" should support "friendlyShort" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDate(baseDateTime, 'friendlyShort'), 'Fri 17 Feb');
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'friendlyShort'),
		'Sat 17 Jun'
	);
});

test('"formatDate" should support "friendlyShort" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, 'monthYear', 'Canada/Eastern'),
		'February 2017'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'monthYear', 'Canada/Eastern'),
		'June 2017'
	);
});

test('"formatDate" should support "monthYear" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, 'monthYear', 'Canada/Eastern'),
		'February 2017'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'monthYear', 'Canada/Eastern'),
		'June 2017'
	);
});

test('"formatDate" should support "friendlyWithDayOfMonth" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(
			baseDateTime,
			'friendlyWithDayOfMonth',
			'Canada/Eastern'
		),
		'Fri 17 February 2017'
	);

	t.is(
		brightDates.formatDate(
			baseDateTimeDST,
			'friendlyWithDayOfMonth',
			'Canada/Eastern'
		),
		'Sat 17 June 2017'
	);
});

test('"formatDate" should support "timezone" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDate(baseDateTime, 'timezone'), 'GMT');
	t.is(brightDates.formatDate(baseDateTimeDST, 'timezone'), 'BST');
});

test('"formatDate" should support "timezone" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, 'timezone', 'Canada/Eastern'),
		'EST'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'timezone', 'Canada/Eastern'),
		'EDT'
	);
});

test('"formatDate" should support "offset" format', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(brightDates.formatDate(baseDateTime, 'offset'), '+00:00');
	t.is(brightDates.formatDate(baseDateTimeDST, 'offset'), '+01:00');
});

test('"formatDate" should support "offset" format with a timezone overide', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, 'offset', 'Canada/Eastern'),
		'-05:00'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, 'offset', 'Canada/Eastern'),
		'-04:00'
	);
});

test('"formatDate" should support an array of formats', t => {
	t.is(brightDates.getTimezone(), 'Europe/London');

	t.is(
		brightDates.formatDate(baseDateTime, ['short', 'offset']),
		'17/02/2017 +00:00'
	);
	t.is(
		brightDates.formatDate(baseDateTimeDST, ['short', 'offset']),
		'17/06/2017 +01:00'
	);
});
