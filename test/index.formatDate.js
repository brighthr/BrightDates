const { test } = require('ava');

const dateUtils = require('../src');

const baseDateTime = '2017-02-17T00:00:00-06:00';
const baseDateTimeDST = '2017-06-17T00:00:00-06:00';

test.beforeEach(() => {
	dateUtils.setTimezone('Europe/London');
});

test('"format" should throw on unrecognised formats', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.throws(() => {
		dateUtils.formatDate(baseDateTime, 'iwillneverexistlikenever');
	});
});

test('"format" should support no format', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(dateUtils.formatDate(baseDateTime), '2017-02-17T00:00:00Z');
	t.is(dateUtils.formatDate(baseDateTimeDST), '2017-06-17T00:00:00+01:00');
});

test('"format" should support no format with a timezone overide', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(
		dateUtils.formatDate(baseDateTime, null, 'Canada/Eastern'),
		'2017-02-17T00:00:00-05:00'
	);
	t.is(
		dateUtils.formatDate(baseDateTimeDST, null, 'Canada/Eastern'),
		'2017-06-17T00:00:00-04:00'
	);
});

test('"format" should support "short" format', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(dateUtils.formatDate(baseDateTime, 'short'), '2017-02-17');
	t.is(dateUtils.formatDate(baseDateTimeDST, 'short'), '2017-06-17');
});

test('"format" should support "short" format with a timezone overide', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(
		dateUtils.formatDate(baseDateTime, 'short', 'Canada/Eastern'),
		'2017-02-17'
	);
	t.is(
		dateUtils.formatDate(baseDateTimeDST, 'short', 'Canada/Eastern'),
		'2017-06-17'
	);
});

test('"format" should support "friendly" format', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(dateUtils.formatDate(baseDateTime, 'friendly'), 'Fri 17th Feb 2017');
	t.is(
		dateUtils.formatDate(baseDateTimeDST, 'friendly'),
		'Sat 17th Jun 2017'
	);
});

test('"format" should support "friendly" format with a timezone overide', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(
		dateUtils.formatDate(baseDateTime, 'friendly', 'Canada/Eastern'),
		'Fri 17th Feb 2017'
	);
	t.is(
		dateUtils.formatDate(baseDateTimeDST, 'friendly', 'Canada/Eastern'),
		'Sat 17th Jun 2017'
	);
});

test('"format" should support "timezone" format', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(dateUtils.formatDate(baseDateTime, 'timezone'), 'GMT');
	t.is(dateUtils.formatDate(baseDateTimeDST, 'timezone'), 'BST');
});

test('"format" should support "timezone" format with a timezone overide', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(
		dateUtils.formatDate(baseDateTime, 'timezone', 'Canada/Eastern'),
		'EST'
	);
	t.is(
		dateUtils.formatDate(baseDateTimeDST, 'timezone', 'Canada/Eastern'),
		'EDT'
	);
});

test('"format" should support "offset" format', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(dateUtils.formatDate(baseDateTime, 'offset'), '+00:00');
	t.is(dateUtils.formatDate(baseDateTimeDST, 'offset'), '+01:00');
});

test('"format" should support "offset" format with a timezone overide', t => {
	t.is(dateUtils.getTimezone(), 'Europe/London');

	t.is(
		dateUtils.formatDate(baseDateTime, 'offset', 'Canada/Eastern'),
		'-05:00'
	);
	t.is(
		dateUtils.formatDate(baseDateTimeDST, 'offset', 'Canada/Eastern'),
		'-04:00'
	);
});
