'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('brightApp.dateTimeServiceNew', []).factory('dateTimeServiceNew', _index2.default);

_angular2.default.module('brightApp.angularbrightDates', []).filter('dateFormat', function () {
	return function (value, format, timezone) {
		return _index2.default.formatDate(value, format, timezone);
	};
});

_angular2.default.module('brightApp.angularbrightDates', []).filter('dateTimeFormat', function () {
	return function (value, format, timezone) {
		return _index2.default.formatDateTime(value, format, timezone);
	};
});