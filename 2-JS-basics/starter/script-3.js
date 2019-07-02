// *** Functions

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if(retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.')
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, "Mike");
// yearsUntilRetirement(1969, "Jane");

// * Function Statements and Expressions *


// Function declaration
// var whatDoYouDo = function(job, firstName) {
// }

// Function expression
// var whatDoYouDo = function(job, firstName) {
// switch(job) {
//     case 'teacher':
//         return firstName + ' teaches code.';
//         case 'driver':
//             return firstName + ' drives taxi.';
//             case 'designer':
//                   return (
//                     firstName + " designs beautiful websites"
//                   );
//                 default: 
//                   return (
//                     firstName + " does something else"
//                   );
              
// }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo("designer", "Jane"));
// console.log(whatDoYouDo("retired", "Mark"));

// *** Arrays 

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// Different array types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop()
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);

// Coding Challenge 3

function calculateTip(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if ( bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
            percentage = .1;
        }
        return percentage * bill;
}

console.log(calculateTip(100));

var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]), 
calculateTip(bills[1]), 
calculateTip(bills[2])];

var finalValues = [bills[0] + tips[0], 
bills[1] + tips[1], 
bills[2] + tips[2]];

console.log(tips, finalValues);