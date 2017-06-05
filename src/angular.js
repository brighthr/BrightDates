import angular from 'angular';

import brightDates from './index';

angular
	.module('angularbrightDates', [])
	.filter('dateFormat', () => (value, format, timezone) =>
		brightDates.formatDate(value, format, timezone));

angular
	.module('angularbrightDates', [])
	.filter('dateTimeFormat', () => (value, format, timezone) =>
		brightDates.formatDateTime(value, format, timezone));
