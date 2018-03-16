const { test } = require('ava');
const moment = require('moment');
const brightDates = require('../src');

test('should return months of the year in short format "Jan, Feb". ', t=>{ 
    t.is(brightDates.monthsShort().join(''), moment.monthsShort().join(''));
});