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
let num = 2;

function makeNegative(num) {
    
    if (num === 0){
        return 0}
    else if (num > 0){
      return num
      } 
    else return num - (num*2)
  }