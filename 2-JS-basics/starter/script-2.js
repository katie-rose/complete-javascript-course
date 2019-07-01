// // If / else statements 

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = false;

// if (isMarried) {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " will hopefully marry soon");
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiMark);
// var bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiJohn);

// // var markHigherBMI = bmiMark > bmiJohn;
// // console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

// if (bmiMark > bmiJohn) {
//   console.log("Mark' BMI is higher than John's");
// } else {
//   console.log("John' BMI is higher than Mark's");
// }

/*** Boolean Logic ****/

var firstName = 'John';
var age = 20;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
     console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
     console.log(firstName + ' is a young man.');
 } else {
     console.log(firstName + ' is a man.');
 }