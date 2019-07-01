// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge)

// var job;
// console.log(job)

// job = 'Teacher';
// console.log(job)

/* Variable mutation and type coercion */

// var firstName = 'John';
// var age = 28;

// //Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// // pop up
// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/* Basic Operators */

// var year, yearJohn, yearMark;
// var year = 2018;
// ageJohn = 28;
// ageMark = 33;

// Math operators
// var yearJohn = year - 28;
// var yearJohn = year - 33;

// yearJohn = year - ageJohn;
// yeahMark = year - ageMark;

// console.log(yearJohn);

// console.log(year + 2);
// console.log(year * 4);
// console.log(year / 10);

// Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder)

// typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older');

/* Operator Precedence */

// var now = 2019;
// var yearJohn = 1989;
// var fullAge = 18;

// Multiple operators
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

// CODING CHALLENGE

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var markHigherBMI = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);
