'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('brightApp.dateTimeServiceNew', ['brightApp.dateTimeServiceNew.constructor', 'brightApp.dateTimeServiceNew.dateFormatFilter', 'brightApp.dateTimeServiceNew.dateTimeFormatFilter']); /* eslint no-undef: 0 */

angular.module('brightApp.dateTimeServiceNew.constructor', []).factory('dateTimeServiceNew', function () {
	return _index2.default;
});

angular.module('brightApp.dateTimeServiceNew.dateFormatFilter', []).filter('dateFormat', function () {
	return function (value, format, timezone) {
		return _index2.default.formatDate(value, format, timezone);
	};
});

angular.module('brightApp.dateTimeServiceNew.dateTimeFormatFilter', []).filter('dateTimeFormat', function () {
	return function (value, format, timezone) {
		return _index2.default.formatDateTime(value, format, timezone);
	};
});