'use strict';

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formats = {
	api: 'YYYY-MM-DD',
	short: 'DD/MM/YYYY',
	friendly: 'ddd DD MMMM YYYY',
	friendlyShort: 'ddd DD MMM',
	time: 'hh:mm',
	timezone: 'zz',
	offset: 'Z',
	datetime: 'DD/MM/YYYY hh:mm'
};

function pad(str) {
	return ('0' + str).slice(-2);
}

function arrify(val) {
	return Array.isArray(val) ? val : [val];
}

function joinFormats(selectedFormat) {
	return arrify(selectedFormat).map(function (format) {
		return formats[format];
	}).join(' ');
}

var brightDates = function brightDates() {
	var userTimezone = 'Europe/London';
	_momentTimezone2.default.tz.setDefault(userTimezone);

	function setTimezone(tz) {
		userTimezone = tz;

		_momentTimezone2.default.tz.setDefault(tz);
	}

	function getTimezone() {
		return userTimezone;
	}

	function date(dateInput) {
		var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : userTimezone;

		var dateToParse = dateInput || new Date();

		if (Array.isArray(dateInput)) {
			return _momentTimezone2.default.tz(dateInput.slice(0, 3), timezone);
		}

		if (dateInput instanceof Date) {
			dateToParse = dateToParse.getFullYear() + '-' + pad(dateToParse.getMonth() + 1) + '-' + pad(dateToParse.getDate());
		}

		return _momentTimezone2.default.tz(dateToParse, formats.api, timezone);
	}

	function dateTime(dateTimeInput) {
		var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : userTimezone;

		return _momentTimezone2.default.tz(dateTimeInput, timezone);
	}

	function formatDate(dateInput, formatInput, tz) {
		var selectedFormat = joinFormats(formatInput) || null;

		if (formatInput && !selectedFormat) {
			throw new Error('Unrecognised format: ' + formatInput);
		}

		return date(dateInput, tz).format(selectedFormat || formats.api);
	}

	function formatDateTime(dateInput, formatInput, tz) {
		var selectedFormat = joinFormats(formatInput) || null;

		if (formatInput && !selectedFormat) {
			throw new Error('Unrecognised format: ' + formatInput);
		}

		return dateTime(dateInput, tz).format(selectedFormat);
	}

	function dateAndTime(dateInput, time) {
		var timezone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : userTimezone;

		return _momentTimezone2.default.tz(formatDate(dateInput, 'api') + 'T' + time, formats.api + 'T' + formats.time, timezone);
	}

	function momentToNativeDate(momentInput) {
		var returnDate = new Date(momentInput.year(), momentInput.month(), momentInput.date());

		returnDate.setHours(0);
		returnDate.setMinutes(0);
		returnDate.setSeconds(0);

		return returnDate;
	}

	function momentToNativeUTCDate(momentInput) {
		return new Date(Date.UTC(momentInput.year(), momentInput.month(), momentInput.date()));
	}

	function momentToNativeDateTime(momentInput) {
		return new Date(momentInput.year(), momentInput.month(), momentInput.date(), momentInput.hours(), momentInput.minutes(), momentInput.seconds());
	}

	return {
		setTimezone: setTimezone,
		getTimezone: getTimezone,
		date: date,
		dateTime: dateTime,
		dateAndTime: dateAndTime,
		formatDate: formatDate,
		formatDateTime: formatDateTime,
		momentToNativeDate: momentToNativeDate,
		momentToNativeDateTime: momentToNativeDateTime,
		momentToNativeUTCDate: momentToNativeUTCDate
	};
}();

module.exports = brightDates;