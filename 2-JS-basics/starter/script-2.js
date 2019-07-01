// If / else statements 

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = false;

if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will hopefully marry soon");
}

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

