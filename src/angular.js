import angular from 'angular';

import brightDates from './index';

angular
	.module('brightApp.dateTimeServiceNew', [])
	.factory('dateTimeServiceNew', brightDates);

angular
	.module('brightApp.angularbrightDates', [])
	.filter('dateFormat', () => (value, format, timezone) =>
		brightDates.formatDate(value, format, timezone));

angular
	.module('brightApp.angularbrightDates', [])
	.filter('dateTimeFormat', () => (value, format, timezone) =>
		brightDates.formatDateTime(value, format, timezone));
