//1 Check Even or Odd

// const n = 6

// if(n%2)

// {

//     console.log("Odd")

// }else

// {

//     console.log("Even")

// }

//2 Find the Maximum of Two Numbers

// let a = 5;

// let b = 10;

// if (a > b) 

// {

//   console.log("The larger number is: " + a);

// } else {

//   console.log("The larger number is: " + b);

// }

//3. Check Leap Year

// let year = 2023;  

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 

// {

//   console.log(year + " is a Leap Year.");

// } else {

//   console.log(year + " is not a Leap Year.");

// }

//4. Sum of Natural Numbers

// function sumOfNaturalNumbers(n) {

//   let sum = 0;

//   for (let i = 1; i <= n; i++) {

//     sum += i;

//   }

//   return sum;

// }

// console.log(sumOfNaturalNumbers(10));

//5. Factorial of a Number

// function factorial(n) {

//   let result = 1;

//   for (let i = 1; i <= n; i++) {

//     result *= i;

//   }

//   return result;

// }

// console.log(factorial(4));

//6. Print Multiplication Table

// let number = 6;  

// for (let i = 1; i <= 10; i++) 

// {

//   console.log${number} x ${i} = ${number * i});

// }

//7. Reverse a Number

// let number = 21365;  

// let reversed = number.toString().split('').reverse().join('');

// console.log(reversed); 

//8. Palindrome Check (Number)

// let number = 121;  

// let numberString = number.toString();

// let reversedString = numberString.split('').reverse().join('');

// if (numberString === reversedString) {

//   console.log("The number is a palindrome.");

// } else {

//   console.log("The number is not a palindrome.");

// }

//9. Check Prime Number

// let number = 11;  

// if (number <= 1) {

//   console.log("The number is not prime.");

// } else {

//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(number); i++) {

//     if (number % i === 0) {

//       isPrime = false;

//       break;

//     }

//   }

  

//   if (isPrime) {

//     console.log("The number is prime.");

//   } else {

//     console.log("The number is not prime.");

//   }

// }

//10. Count Digits in a Number

// let number = 123;  

// let digitCount = number.toString().length;

// console.logThe number has ${digitCount} digits.);

//11. Sum of Digits

// let number = 1234;  

// let sumOfDigits = number.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);

// console.logThe sum of digits is: ${sumOfDigits});

//12. Check Armstrong Number

// let number = 153;  

// let numString = number.toString();

// let numDigits = numString.length;

// let sum = 0;

// let temp = number;

// while (temp > 0) {

//   let digit = temp % 10;  

//   sum += Math.pow(digit, numDigits);  

//   temp = Math.floor(temp / 10);  

// }

// if (sum === number) {

//   console.log${number} is an Armstrong number.);

// } else {

//   console.log${number} is not an Armstrong number.);

// }

//13. Generate Fibonacci Series

// let n = 10; 

// let a = 0, b = 1;

// console.log(a); 

// for (let i = 1; i < n; i++) {

//   console.log(b); 

//   let next = a + b; 

//   a = b; 

//   b = next; 

// }

//14. Check Vowel or Consonant

// let character = 'i';  

// if ('aeiou'.includes(character.toLowerCase())) {

//   console.log${character} is a vowel.);

// } else {

//   console.log${character} is a consonant.);

// }

//15. Simple Calculator

// let num1 = 10;  

// let num2 = 5;   

// let operation = "+";  

// let result;

// if (operation === "+") {

//   result = num1 + num2;

// } else if (operation === "-") {

//   result = num1 - num2;

// } else if (operation === "*") {

//   result = num1 * num2;

// } else if (operation === "/") {

//   if (num2 !== 0) {

//     result = num1 / num2;

//   } else {

//     result = "Cannot divide by zero!";

//   }

// } else {

//   result = "Invalid operation!";

// }

// console.logResult: ${result});

//16. Find GCD (HCF)

// let num1 = 56;  

// let num2 = 98;  

// while (num2 !== 0) {

//   let remainder = num1 % num2;

//   num1 = num2;

//   num2 = remainder;

// }

// console.logThe GCD is: ${num1});

//17. Check Perfect Number

// let number = 28;  

// let sum = 0;

// for (let i = 1; i <= number / 2; i++) {

//   if (number % i === 0) {  

//     sum += i; 

//   }

// }

// if (sum === number) {

//   console.log${number} is a Perfect Number.);

// } else {

//   console.log${number} is not a Perfect Number.);

// }

//18. Print All Divisors

// let number = 10;  

// console.logDivisors of ${number}:);

// for (let i = 1; i <= number; i++) {

//   if (number % i === 0) 

//   {  

//     console.log(i);  

//   }

// }

//19. Number is Positive, Negative or Zero

// let number = 8;  

// if (number > 0) {

//   console.log${number} is a Positive number.);

// } else if (number < 0) {

//   console.log${number} is a Negative number.);

// } else {

//   console.log${number} is Zero.);

// }

//20. Find Power (Exponentiation)

// let a = 2;  

// let b = 3;  

// let result = a ** b; 

// console.log${a} raised to the power of ${b} is ${result});