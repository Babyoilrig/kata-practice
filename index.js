//Kata 1 - level 8 - complete
//Solution
// function evenOrOdd(number) {
//   if (number===0){
// return "Even"}
//   else if (number % 2===0){
// return "Even"}
//   else return "Odd"
// }

//Kata 2 - Level 8 - Complete
// function multiply(a, b){
//     return a * b
//    }

//Kata 3 - Level 8 - Complete
// function positiveSum(arr) {
//     let sum = 0;
//       for (let i = 0; i < arr.length; ++i) {
//           if (arr[i] > 0) {
//               sum += arr[i];
//           }
//       }
//       return sum;
//   };
//Kata 4 - Level 8 - Complete
// function makeNegative(num) {
    
//     if (num <= 0){
//       return num
//       }
//   else return -(num)
//     }

//Kata 5- Reverse a string - Level 8 - Complete
// function solution(str){
//     return str.split("").reverse().join("");
//   }

//Kata 6 - Boolean values - Level 8 - Complete
//Complete the method that takes a boolean value 
//and return a "Yes" string for true, or a "No" string for false.
//function boolToWord( bool ){
    // if (bool === true) {
    //     return "Yes";
    //   }
    //   else {
    //     return "No";
    //   }
    // }

    //Kata 8 kyu - Convert a Number to a String!
    //DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
// Solution: function numberToString(num) {
//     return num.toString();
//   }

//Kata - 8 kyu - Opposite number
//DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     return number * -1;
//   }

//Kata - 8 kyu - Remove First and Last Character
//DESCRIPTION: It's pretty straightforward. Your goal is to create a 
// function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry 
// with strings with less than two characters.
//Solution:
// function removeChar(str){
//     return str.slice(1, str.length - 1);
//     };

//Kata - 8 kyu - String repeat
//DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, 
//and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Solution:
//function repeatStr (n, s) {
//     return s.repeat(n);
// }

// //Kata - 7kyu -Count the vowels
// //Description - Count the vowels in a string
//Solution:
// //function getCount(str) {
//     var m = str.match(/[aeiou]/gi);
//     return m === null ? 0 : m.length;
//     }
   
  //Kata - 7 kyu - Disemvowel Trolls
//   //Remove all vowels out of a string
//   //Solution:
//   function disemvowel(str) {
//     var newStr = str.replace(/[aeiou]/gi,'');
//   return newStr;
//   }

// //Kata - 7 kyu - Digit*Digit
// //DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// Kata – arrange digits into descending order 4-5-23
// function descendingOrder(n){
//   let newN = n.toString().split('').sort(function (a, b) { return b - a; }).join('');
//   return +newN;
// }

// Return middle characters

// Kata 4-5-23

// function getMiddle(str) {

//         var position;
//         var length;

//         if(str.length % 2 == 1) {
//             position = str.length / 2;
//             length = 1;
//         } else {
//             position = str.length / 2 - 1;
//             length = 2;
//         }

//         return str.substring(position, position + length)
//     }

  





  

 


