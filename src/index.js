import moment from 'moment-timezone';

const formats = {
	short: 'YYYY-MM-DD',
	friendly: 'ddd Do MMM YYYY',
	friendlyShort: 'ddd Do MMM',
	time: 'hh:mm',
	timezone: 'zz',
	offset: 'Z',
	datetime: 'YYYY-MM-DD hh:mm'
};

function pad(str) {
	return `0${str}`.slice(-2);
}

const dateUtils = (function dateUtils() {
	let userTimezone = 'Europe/London';
	moment.tz.setDefault(userTimezone);

	function setTimezone(tz) {
		userTimezone = tz;

		moment.tz.setDefault(tz);
	}

	function getTimezone() {
		return userTimezone;
	}

	function date(dateInput, timezone = userTimezone) {
		let dateToParse = dateInput;

		if (dateInput instanceof Date) {
			dateToParse = `${dateInput.getFullYear()}-${pad(dateInput.getMonth() + 1)}-${pad(dateInput.getDate())}`;
		}

		return moment.tz(dateToParse, formats.short, timezone);
	}

	function dateTime(dateInput, timezone = userTimezone) {
		return moment.tz(dateInput, timezone);
	}

	function dateAndTime(dateInput, time, timezone = userTimezone) {
		return moment.tz(
			`${moment(dateInput).format(formats.short)}T${time}`,
			`${formats.short}T${formats.time}`,
			timezone
		);
	}

	function today(tz = userTimezone) {
		return moment.tz(tz);
	}

	function formatDate(dateInput, formatInput, tz) {
		const selectedFormat = formats[formatInput] || null;

		if (formatInput && !selectedFormat) {
			throw new Error(`Unrecognised format: ${formatInput}`);
		}

		return date(dateInput, tz).format(selectedFormat);
	}

	function formatDateTime(dateInput, formatInput, tz) {
		const selectedFormat = formats[formatInput] || null;

		if (formatInput && !selectedFormat) {
			throw new Error(`Unrecognised format: ${formatInput}`);
		}

		return dateTime(dateInput, tz).format(selectedFormat);
	}

	return {
		setTimezone,
		getTimezone,
		date,
		dateTime,
		dateAndTime,
		formatDate,
		formatDateTime,
		today
	};
})();

module.exports = dateUtils;
