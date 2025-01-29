// 1.	Basic Usage: Write a switch statement that prints the day of the week based on a given number (1 for Monday, 7 for Sunday).
const number = 1;
let day;
switch (number) {
  default:
    day = "Invalid Input";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
}
console.log(day);
// 2.	Default Case: Modify the above program to handle invalid inputs (numbers outside 1-7).
// 3.	Multiple Cases, Same Output: Write a switch statement where "a", "e", "i", "o", "u" all print "Vowel" and other letters print "Consonant".
let character = "A";
let result;
switch (character) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    result = "Vowel";
    break;

  default:
    result = "Consonant";
}
console.log(result);
// 4.	Using break: Create a switch statement that prints different greetings based on the time of day (morning, afternoon, evening).
const myTime = 15;
let feedback;
switch (myTime) {
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    feedback = "Good morning";
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    feedback = "Good afternoon";
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
  case 24:
  case 1:
  case 2:
  case 3:
    feedback = "Good night";
    break;
  default:
    feedback = "You are timeless";
}
console.log(feedback);

// 5.	Omitting break: Demonstrate how missing break in a switch statement causes fall-through behavior.
// Intermediate Questions
// 6.	Numeric and String Cases: Write a switch statement that takes a number (1-12) and prints the corresponding month name.
let month = 4;

switch (month) {
  case 1:
    result = "January";
    break;
  case 2:
    result = "February";
    break;
  case 3:
    result = "March";
    break;
  case 4:
    result = "April";
    break;
  case 5:
    result = "May";
    break;
  case 6:
    result = "June";
    break;
  case 7:
    result = "July";
    break;
  case 8:
    result = "August";
    break;
  case 9:
    result = "September";
    break;
  case 10:
    result = "October";
    break;
  case 11:
    result = "November";
    break;
  case 12:
    result = "December";
    break;
  default:
    result = "Invalid input";
    break;
}
console.log(result);
// 7.	Switch with Expressions: Use a switch statement where cases are based on expressions (Math.floor(score / 10) to print letter grades).
let score = 69;

switch (Math.floor(score / 10)) {
  case 4:
  case 5:
    result = "C";
    break;
  case 6:
  case 7:
    result = "B";
    break;
  case 9:
  case 8:
    result = "A";
    break;
  default:
    result = "FAIL";
}
console.log(result);
// 8.	Using switch with Boolean Values: Implement a switch that checks if a number is even or odd using a Boolean expression.
let num = 1999123;
switch (num % 2 === 0) {
  case true:
    result = "Even";
    break;
  case false:
    result = "Odd";
    break;
  default:
    result = "Invalid Input";
}
console.log(result);
// 9.	Combining case Labels: Create a switch that groups multiple cases together (e.g., case 1, 2, 3 print "Low", 4-6 print "Medium", 7-9 print "High").

num = 7;
switch (num) {
  case 1:
  case 2:
  case 3:
    console.log("Low");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Medium");
    break;
  case 7:
  case 8:
  case 9:
    console.log("High");
    break;
}
// 10.	Switch with Function Calls: Use switch to call different functions based on a user’s input (add(), subtract(), multiply(), divide()).
//
function add(n1, n2) {
  console.log(n1 + n2);
}
function multiply(n1, n2) {
  console.log(n1 * n2);
}
function subtract(n1, n2) {
  if (n1 > n2) {
    console.log(n1 - n2);
  } else {
    console.log(n2 - n1);
  }
}
function divide(n1, n2) {
  if (n2 === 0) {
    console.log("Cannot divide by zero");
  } else {
    console.log(n1 / n2);
  }
}

function passFunc(action, num1, num2) {
  switch (action) {
    case "add":
      add(num1, num2);
      break;
    case "subtract":
      subtract(num1, num2);
      break;
    case "multiply":
      multiply(num1, num2);
      break;
    case "divide":
      divide(num1, num2);
      break;
    default:
      console.log("Invalid Input");
  }
}
passFunc("add", 1, 5);
passFunc("subtract", 15, 5);
passFunc("multiply", 1, 0);
passFunc("divide", 1, 0);
passFunc("divide", 10, 5);
[1, 2, 3, 4, 5, 6];
// 11.	Nested switch: Implement a nested switch where the first switch handles categories (e.g., "Fruits", "Vegetables") and the second switch handles specific items.
let categories = "Vegetables";
let items = "apple";
let price;
switch (categories) {
  case "Fruits":
    switch (items) {
      case "apple":
        price = 1;
        break;
      case "banana":
        price = 2;
        break;
      case "mango":
        price = 3;
        break;
      default:
        price = "fruit not found";
    }
    break;
  case "Vegetables":
    switch (items) {
      case "potato":
        price = 1.1;
        break;
      case "egg plant":
        price = 2.1;
        break;
      default:
        price = "Vegetable not found";
    }
    break;
  default:
    price = "Invalid category";
}
console.log(price);
// 12.	Using default Effectively: Write a switch statement that suggests alternative options if the selected option is not available.
// 13.	Switch vs. If-Else: Convert a complex if-else statement into a switch and compare performance/readability.
// 14.	Handling Objects in switch: Use a switch statement where cases match against object properties.

// 15.	Dynamic Case Matching: Implement a switch where the case values are dynamically generated from an array.
//
