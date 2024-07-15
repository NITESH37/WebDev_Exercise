const number = 0;
if (number < 0) {
  console.log(number, "is negative");
}
if (number == 0) {
  console.log(number, "is zero");
} else {
  console.log(number, "is postive");
}

const age = 10;
if (age >= 18) {
  console.log("Person is eligible for Vote");
} else {
  console.log("Person is not eligible for vote");
}

const firstNumber = 45;
const secondNumber = 50;
const thirdNumber = 45;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log(firstNumber, "is largest");
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log(secondNumber, "is largest");
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  console.log(thirdNumber, "is largest");
} else {
  console.log("Not largest");
}

const Day = 7;
switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("non of these");
}

const marks = 9;
switch (true) {
  case marks >= 8:
    console.log("Grade A");
    break;
  case marks >= 6:
    console.log("Grade B");
    break;
  case marks >= 4:
    console.log("Grade C");
    break;
  case marks >= 2:
    console.log("Grade D");
    break;
  case marks >= 0:
    console.log("Grade F");
    break;

  default:
    console.log("Give Valid data");
}

const numbers = 10;
if (numbers % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

const years = 2023;
if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
  console.log(years, "is a leap years");
} else {
  console.log(years, "is not leap years");
}

/*
Output:

0 is zero
Person is not eligible for vote
50 is largest
Sunday
Grade A
Even Number
2023 is not leap years

*/
