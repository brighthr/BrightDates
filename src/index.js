import moment from 'moment-timezone';

const formats = {
	api: 'YYYY-MM-DD',
	short: 'DD/MM/YYYY',
	friendly: 'dddd DD MMMM YYYY',
	friendlyShort: 'ddd DD MMM',
	friendlyShortWithYear: 'DD MMM YYYY',
	time: 'hh:mm',
	timezone: 'zz',
	offset: 'Z',
	datetime: 'DD/MM/YYYY hh:mm',
	year: 'YYYY'
};

function pad(str) {
	return `0${str}`.slice(-2);
}

function arrify(val) {
	return Array.isArray(val) ? val : [val];
}

function joinFormats(selectedFormat) {
	return arrify(selectedFormat).map(format => formats[format]).join(' ');
}

const brightDates = (function brightDates() {
	let userTimezone = 'Europe/London';
	// moment.tz.setDefault(userTimezone);

	function setTimezone(tz) {
		userTimezone = tz;

		moment.tz.setDefault(tz);
	}

	function getTimezone() {
		return userTimezone;
	}

	function date(dateInput, timezone = userTimezone) {
		let dateToParse = dateInput || new Date();

		if (Array.isArray(dateInput)) {
			return moment.tz(dateInput.slice(0, 3), timezone);
		}

		if (dateToParse instanceof Date) {
			dateToParse = `${dateToParse.getFullYear()}-${pad(dateToParse.getMonth() + 1)}-${pad(dateToParse.getDate())}`;
		}

		return moment.tz(dateToParse, formats.api, timezone);
	}

	function dateTime(dateTimeInput, timezone = userTimezone) {
		return moment.tz(dateTimeInput, timezone);
	}

	function formatDate(dateInput, formatInput, tz) {
		const selectedFormat = joinFormats(formatInput) || null;

		if (formatInput && !selectedFormat) {
			throw new Error(`Unrecognised format: ${formatInput}`);
		}

		return date(dateInput, tz).format(selectedFormat || formats.api);
	}

	function formatDateTime(dateInput, formatInput, tz) {
		const selectedFormat = joinFormats(formatInput) || null;

		if (formatInput && !selectedFormat) {
			throw new Error(`Unrecognised format: ${formatInput}`);
		}

		return dateTime(dateInput, tz).format(selectedFormat);
	}

	function dateAndTime(dateInput, time, timezone = userTimezone) {
		let dateToParse = dateInput;

		if (Array.isArray(dateInput)) {
			dateToParse = moment(dateInput.slice(0, 3)).format(formats.api);
		}

		if (dateToParse instanceof Date) {
			dateToParse = `${dateInput.getFullYear()}-${pad(dateInput.getMonth() + 1)}-${pad(dateInput.getDate())}`;
		}

		return moment.tz(
			`${moment(dateToParse, formats.api).format(formats.api)}T${time}`,
			`${formats.api}T${formats.time}`,
			timezone
		);
	}

	function momentToNativeDate(momentInput) {
		return new Date(
			momentInput.year(),
			momentInput.month(),
			momentInput.date()
		);
	}

	function momentToNativeUTCDate(momentInput) {
		return new Date(
			Date.UTC(
				momentInput.year(),
				momentInput.month(),
				momentInput.date()
			)
		);
	}

	function momentToNativeDateTime(momentInput) {
		return new Date(
			momentInput.year(),
			momentInput.month(),
			momentInput.date(),
			momentInput.hours(),
			momentInput.minutes(),
			momentInput.seconds()
		);
	}

	return {
		setTimezone,
		getTimezone,
		date,
		dateTime,
		dateAndTime,
		formatDate,
		formatDateTime,
		momentToNativeDate,
		momentToNativeDateTime,
		momentToNativeUTCDate
	};
})();

module.exports = brightDates;
