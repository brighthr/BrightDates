'use strict';

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formats = {
	api: 'YYYY-MM-DD',
	apiOffsetDateTime: 'YYYY-MM-DDTHH:mm:ssZ',
	apiLocalDateTime: 'YYYY-MM-DDTHH:mm:ss',
	short: 'DD/MM/YYYY',
	friendly: 'dddd DD MMMM YYYY',
	friendlyShort: 'ddd DD MMM',
	friendlyShortWithYear: 'DD MMM YYYY',
	dayMonth: 'DD MMM',
	time: 'HH:mm',
	timezone: 'zz',
	offset: 'Z',
	datetime: 'DD/MM/YYYY hh:mm',
	year: 'YYYY'
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
	// moment.tz.setDefault(userTimezone);

	function setTimezone(tz) {
		userTimezone = tz;

		// moment.tz.setDefault(tz);
	}

	function getTimezone() {
		return userTimezone;
	}

	function date() {
		var dateInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
		var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : userTimezone;

		var dateToParse = dateInput === undefined ? _momentTimezone2.default.tz(undefined, timezone).format(formats.api) : dateInput;

		if (Array.isArray(dateInput)) {
			return _momentTimezone2.default.tz(dateInput.slice(0, 3), timezone);
		}

		if (dateToParse instanceof Date) {
			dateToParse = dateToParse.getFullYear() + '-' + pad(dateToParse.getMonth() + 1) + '-' + pad(dateToParse.getDate());
		}

		return _momentTimezone2.default.tz(dateToParse, formats.api, timezone);
	}

	function dateTime(dateTimeInput) {
		var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : userTimezone;

		return _momentTimezone2.default.tz(dateTimeInput, timezone);
	}

	function localDateTime(dateTimeInput) {
		return (0, _momentTimezone2.default)(dateTimeInput);
	}

	function time(timeInput) {
		var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : userTimezone;

		return _momentTimezone2.default.tz(timeInput, 'HH:mm', timezone);
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

	function formatLocalDateTime(dateInput, formatInput) {
		var selectedFormat = joinFormats(formatInput) || null;

		if (formatInput && !selectedFormat) {
			throw new Error('Unrecognised format: ' + formatInput);
		}

		return localDateTime(dateInput).format(selectedFormat);
	}

	function dateAndTime(dateInput, timeInput) {
		var timezone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : userTimezone;

		var dateToParse = dateInput;

		if (Array.isArray(dateInput)) {
			dateToParse = (0, _momentTimezone2.default)(dateInput.slice(0, 3)).format(formats.api);
		}

		if (dateToParse instanceof Date) {
			dateToParse = dateInput.getFullYear() + '-' + pad(dateInput.getMonth() + 1) + '-' + pad(dateInput.getDate());
		}

		return _momentTimezone2.default.tz((0, _momentTimezone2.default)(dateToParse, formats.api).format(formats.api) + 'T' + timeInput, formats.api + 'T' + formats.time, timezone);
	}

	function momentToNativeDate(momentInput) {
		return new Date(momentInput.year(), momentInput.month(), momentInput.date());
	}

	function momentToNativeUTCDate(momentInput) {
		return new Date(Date.UTC(momentInput.year(), momentInput.month(), momentInput.date()));
	}

	function momentToNativeDateTime(momentInput) {
		return new Date(momentInput.year(), momentInput.month(), momentInput.date(), momentInput.hours(), momentInput.minutes(), momentInput.seconds());
	}

	function isSame(date1, date2) {
		var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';

		return date(date1).isSame(date(date2), unit);
	}

	return {
		setTimezone: setTimezone,
		getTimezone: getTimezone,
		date: date,
		dateTime: dateTime,
		dateAndTime: dateAndTime,
		localDateTime: localDateTime,
		formatLocalDateTime: formatLocalDateTime,
		time: time,
		formatDate: formatDate,
		formatDateTime: formatDateTime,
		momentToNativeDate: momentToNativeDate,
		momentToNativeDateTime: momentToNativeDateTime,
		momentToNativeUTCDate: momentToNativeUTCDate,
		isSame: isSame
	};
}();

module.exports = brightDates;