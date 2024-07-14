const number1 = 20;
const number2 = 10;
console.log("Sum = ", number1 + number2);
console.log("Difference =", number1 - number2);
console.log("Product  = ", number1 * number2);
console.log("Quotient  = ", number1 / number2);
console.log("Remainder =  ", number1 % number2);
let number3 = 20;
number3 += 40;
console.log(number3);
let number4 = 20;
number4 -= 5;
console.log(number4);

console.log(number1 > number2);

const number5 = 20;
const number6 = 20;
console.log(number5 >= number6);
console.log(number5 <= number6);
console.log(number5 === number6);

const number7 = 15;
console.log(number7 > number1 && number7 > number2);
console.log(number7 > number1 || number7 > number2);
console.log(!(number7 > number1));

/*
Output:

Sum =  30
Difference = 10
Product  =  200
Quotient  =  2
Remainder =   0
60
15
true
true
true
true
false
true
true
 */
