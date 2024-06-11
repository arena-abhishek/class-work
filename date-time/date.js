//----task1----

//create a date

//----solution----

/* let date = new Date(2012, 1, 20, 3, 12, 4, );
alert( date ); */

//----task2----

/* Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );  */

//----solution----

/* function getWeekDay(date) {
  let days = [`SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`];
  return days[date.getDay()];
}

let date = new Date(2024, 4, 20);
alert(getWeekDay(date)); */

//----task3----

/* European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );  */

//----solution----

//====my
/* function getLocalDay(date) {
  let days = [
    (monday = 1),
    (Tuesday = 2),
    (Wednesday = 3),
    (Thursday = 4),
    (Friday = 5),
    (Saturday = 6),
    (Sunday = 7),
  ];
  return days[date.getDay()];
} */
/* function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }

let date = new Date(2024, 4, 20);
alert(getLocalDay(date)); */

//----task4----

/* Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); */

//----solution----

/* 
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)) */

//----task5----

/* Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb). */

//----solution----

/* function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate(date); 
}
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2016, 5));
console.log(getLastDayOfMonth(2020, 1)); */

//----task6----

/* Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)
The function should work in any day. That is, it should not have a hard-coded value of “today” */

//----solution----

/* function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}
let date = new Date(2012, 1, 1);
alert(getSecondsToday(date));
 */

//----task7----

/* Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded. */

//----solution----

/* function getSecondsaToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}
let newDate = new Date(2024, 4, 19);
console.log(getSecondsaToTomorrow(), );
 */


//----task7----


/* Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
For instance:

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); */


//----solution----



alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

alert( formatDate(new Date(new Date - 86400 * 1000)) );

