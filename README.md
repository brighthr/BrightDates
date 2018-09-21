# BrightDates 

Timezone aware date parsing and formatting 

## Test Bench
There is a live demo on [CodePen](https://codepen.io/ersel/project/editor/DWnMWW) which you can fiddle with. Once the CodePen page loads, open browser's development console and follow the instructions.

## Methods

**All date and datetime methods accept an optional timezone overide as the last argument**

#### brightDates.setTimezone(tz)

Set the default timezone

```js
brightDates.setTimezone('Canada/Eastern');
```

#### brightDates.getTimezone

Get the set timezone

```js
brightDates.getTimezone(); // Europe/London
brightDates.setTimezone('Canada/Eastern');
brightDates.getTimezone(); // Canada/Eastern
```

#### brightDates.date(date, timezone)

Convert a string or native date into a timezone aware date moment

```js
brightDates.date(new Date(2016, 11, 13, 21, 4, 3)); // 2016-10-13T00:00:00Z (moment)

brightDates.date('2017-10-13'); // 2016-10-13T00:00:00Z (moment)
```

#### brightDates.dateTime(dateTimeInput, timezone)

Convert a string or native date into a timezone aware datetime moment

```js
brightDates.dateTime(new Date(2016, 11, 13, 21, 4, 3)); // 2016-10-13T21:04:03Z (moment)

brightDates.dateTime('2017-10-13T21:04:03Z'); // 2016-10-13T21:04:03Z (moment)
```

#### brightDates.dateAndTime(dateInput, timeInput, timezone = userTimezone)

Convert individual date and time elements to a datetime moment

```js
brightDates.dateAndTime(new Date(2016, 11, 13, 21, 4, 3), '01:43'); // 2016-10-13T01:43:00Z (moment)

brightDates.dateAndTime('2017-10-13', '01:43'); // 2016-10-13T01:43:00Z (moment)
```

#### brightDates.today

Get a moment of today

```js
brightDates.today();
```

#### brightDates.formatDate(date, format)

Format a string or native date, returns ISO 8601 if no format is specified.

- short: 'YYYY-MM-DD'
- friendly: 'ddd Do MMM YYYY'
- friendlyShort: 'ddd Do MMM'
- timezone: 'zz'
- offset: 'Z'

```js
brightDates.formatDate('2016-10-13T01:43:00Z', 'short'); // 2016-10-13
```

#### brightDates.formatDateTime

Format a string or native date, returns ISO 8601 if no format is specified.

- short: 'YYYY-MM-DD'
- friendly: 'ddd Do MMM YYYY'
- friendlyShort: 'ddd Do MMM'
- time: 'hh:mm'
- timezone: 'zz'
- offset: 'Z'
- datetime: 'YYYY-MM-DD hh:mm'

```js
brightDates.formatDateTime('2016-10-13T01:43:00Z', 'time'); // 01:43
```

### moment exports

The following utilities from moment are also exported:

- [min()](https://momentjs.com/docs/#/get-set/min/)
- [max()](https://momentjs.com/docs/#/get-set/max/)
- [months() and monthsShort()](https://momentjs.com/docs/#/i18n/listing-months-weekdays/)