const { test } = require('ava');

const brightDates = require('../src');

const ukTimes = [
	{
		actual: '2017-03-25T00:01:00+00:00',
		expected: '2017-03-25T00:00:00.000Z'
	},
	{
		actual: '2017-03-25T23:51:00+00:00',
		expected: '2017-03-25T00:00:00.000Z'
	},
	{
		actual: '2017-03-26T00:01:00+00:00',
		expected: '2017-03-26T00:00:00.000Z'
	},
	{
		actual: '2017-03-26T01:01:00+01:00',
		expected: '2017-03-26T00:00:00.000Z'
	},
	{
		actual: '2017-03-26T23:51:00+01:00',
		expected: '2017-03-26T00:00:00.000Z'
	},
	{
		actual: '2017-03-27T00:01:00+01:00',
		expected: '2017-03-27T00:00:00.000Z'
	},
	{
		actual: '2017-03-27T23:51:00+01:00',
		expected: '2017-03-27T00:00:00.000Z'
	},
	{
		actual: '2017-10-28T00:01:00+0100',
		expected: '2017-10-28T00:00:00.000Z'
	},
	{
		actual: '2017-10-28T23:51:00+0100',
		expected: '2017-10-28T00:00:00.000Z'
	},
	{
		actual: '2017-10-29T00:01:00+00:00',
		expected: '2017-10-29T00:00:00.000Z'
	},
	{
		actual: '2017-10-29T01:01:00+00:00',
		expected: '2017-10-29T00:00:00.000Z'
	},
	{
		actual: '2017-10-29T23:51:00+00:00',
		expected: '2017-10-29T00:00:00.000Z'
	},
	{
		actual: '2017-10-30T00:01:00+00:00',
		expected: '2017-10-30T00:00:00.000Z'
	},
	{
		actual: '2017-10-30T23:51:00+00:00',
		expected: '2017-10-30T00:00:00.000Z'
	}
];

const canadaTimes = [
	{
		actual: '2017-03-11T00:01:00-05:00',
		expected: '2017-03-11T00:00:00.000Z'
	},
	{
		actual: '2017-03-11T23:51:00-05:00',
		expected: '2017-03-11T00:00:00.000Z'
	},
	{
		actual: '2017-03-12T00:01:00-04:00',
		expected: '2017-03-12T00:00:00.000Z'
	},
	{
		actual: '2017-03-12T01:01:00-04:00',
		expected: '2017-03-12T00:00:00.000Z'
	},
	{
		actual: '2017-03-12T23:51:00-04:00',
		expected: '2017-03-12T00:00:00.000Z'
	},
	{
		actual: '2017-03-13T00:01:00-04:00',
		expected: '2017-03-13T00:00:00.000Z'
	},
	{
		actual: '2017-03-13T23:51:00-04:00',
		expected: '2017-03-13T00:00:00.000Z'
	},
	{
		actual: '2017-10-04T00:01:00-04:00',
		expected: '2017-10-04T00:00:00.000Z'
	},
	{
		actual: '2017-10-04T23:51:00-04:00',
		expected: '2017-10-04T00:00:00.000Z'
	},
	{
		actual: '2017-10-05T00:01:00-05:00',
		expected: '2017-10-05T00:00:00.000Z'
	},
	{
		actual: '2017-10-05T01:01:00-05:00',
		expected: '2017-10-05T00:00:00.000Z'
	},
	{
		actual: '2017-10-05T23:51:00-05:00',
		expected: '2017-10-05T00:00:00.000Z'
	},
	{
		actual: '2017-10-06T00:01:00-05:00',
		expected: '2017-10-06T00:00:00.000Z'
	},
	{
		actual: '2017-10-06T23:51:00-05:00',
		expected: '2017-10-06T00:00:00.000Z'
	}
];

test.beforeEach(() => {
	brightDates.setTimezone('Europe/London');
});

test('"momentToNativeUTCDate" should return the correct date for UK times', t => {
	ukTimes.forEach(time => {
		t.is(
			brightDates
				.momentToNativeUTCDate(brightDates.date(time.actual))
				.toJSON(),
			time.expected,
			`Expected ${time.actual} to equal ${time.expected}`
		);
	});
});

test('"momentToNativeUTCDate" should return the correct date for Canada times', t => {
	canadaTimes.forEach(time => {
		t.is(
			brightDates
				.momentToNativeUTCDate(brightDates.date(time.actual))
				.toJSON(),
			time.expected,
			`Expected ${time.actual} to equal ${time.expected}`
		);
	});
});
