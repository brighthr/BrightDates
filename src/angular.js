/* eslint no-undef: 0 */

import brightDates from './index';

angular.module('brightApp.brightDates', [
	'brightApp.brightDates.constructor',
	'brightApp.brightDates.dateFormatFilter',
	'brightApp.brightDates.dateTimeFormatFilter'
]);

angular
	.module('brightApp.brightDates.constructor', [])
	.factory('brightDates', () => brightDates);

angular
	.module('brightApp.brightDates.dateFormatFilter', [])
	.filter('dateFormat', () => (value, format, timezone) =>
		brightDates.formatDate(value, format, timezone)
	);

angular
	.module('brightApp.brightDates.dateTimeFormatFilter', [])
	.filter('dateTimeFormat', () => (value, format, timezone) =>
		brightDates.formatDateTime(value, format, timezone)
	);
