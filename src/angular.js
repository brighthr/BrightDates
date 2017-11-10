/* eslint no-undef: 0 */

import brightDates from './index';

angular.module('brightApp.dateTimeServiceNew', [
	'brightApp.dateTimeServiceNew.constructor',
	'brightApp.dateTimeServiceNew.dateFormatFilter',
	'brightApp.dateTimeServiceNew.dateTimeFormatFilter'
]);

angular
	.module('brightApp.dateTimeServiceNew.constructor', [])
	.factory('dateTimeServiceNew', () => brightDates);

angular
	.module('brightApp.dateTimeServiceNew.dateFormatFilter', [])
	.filter('dateFormat', () => (value, format, timezone) =>
		brightDates.formatDate(value, format, timezone));

angular
	.module('brightApp.dateTimeServiceNew.dateTimeFormatFilter', [])
	.filter('dateTimeFormat', () => (value, format, timezone) =>
		brightDates.formatDateTime(value, format, timezone));
