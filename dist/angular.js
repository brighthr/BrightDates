'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('brightApp.brightDates', ['brightApp.brightDates.constructor', 'brightApp.brightDates.dateFormatFilter', 'brightApp.brightDates.dateTimeFormatFilter']); /* eslint no-undef: 0 */

angular.module('brightApp.brightDates.constructor', []).factory('brightDates', function () {
	return _index2.default;
});

angular.module('brightApp.brightDates.dateFormatFilter', []).filter('dateFormat', function () {
	return function (value, format, timezone) {
		return _index2.default.formatDate(value, format, timezone);
	};
});

angular.module('brightApp.brightDates.dateTimeFormatFilter', []).filter('dateTimeFormat', function () {
	return function (value, format, timezone) {
		return _index2.default.formatDateTime(value, format, timezone);
	};
});