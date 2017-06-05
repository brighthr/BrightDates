import angular from 'angular';

import dateUtils from './index';

angular
	.module('angularDateUtils', [])
	.filter('dateFormat', () => (value, format, timezone) =>
		dateUtils.formatDate(value, format, timezone));

angular
	.module('angularDateUtils', [])
	.filter('dateTimeFormat', () => (value, format, timezone) =>
		dateUtils.formatDateTime(value, format, timezone));
