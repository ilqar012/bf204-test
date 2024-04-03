// //   Task1

// function printfullName(fullName, lastName) {
//   return `I am ${fullName} ${lastName}`;
// }
// console.log(printfullName("Ilqar", "Nuriyev"));

// // Task2

// function square(number) {
//   return `${number} * ${number} = ${number * number}`;
// }
// console.log(square(6));

// // Task3

// function sum(number1, number2) {
//   return `${number1} + ${number2} = ${number1 + number2}`;
// }
// console.log(sum(2, 3));

// function multiply(number1, number2) {
//   return `${number1} * ${number2} = ${number1 * number2}`;
// }
// console.log(multiply(2, 3));

// function subtruct(number1, number2) {
//   return `${number1} - ${number2} = ${number1 - number2}`;
// }
// console.log(subtruct(2, 3));

// function divide(number1, number2) {
//   return `${number1} / ${number2} = ${number1 / number2}`;
// }
// console.log(divide(2, 3));

// //   Task4

// function calculator(number1, number2, operator) {
//   if (operator === "+") {
//     return `${number1} + ${number2} = ${number1 + number2}`;
//   } else if (operator === "-") {
//     return `${number1} - ${number2} = ${number1 - number2}`;
//   } else if (operator === "*") {
//     return `${number1} * ${number2} = ${number1 * number2}`;
//   } else if (operator === "/") {
//     return `${number1} / ${number2} = ${number1 / number2}`;
//   } else {
//     return `Bele bir emeliyyat yoxdur`;
//   }
// }
// console.log(calculator(2, 5, "+"));
// console.log(calculator(2, 5, "*"));
// console.log(calculator(2, 5, "/"));
// console.log(calculator(2, 5, "-"));

// // Task5

// const getSum = (array) => {
//   return `${array[0] + array[array.length - 1]}`;
// };
// console.log(getSum([1, 2, 3]));
// console.log(getSum([80, 5, 58, 17, 100]));
// console.log(getSum([15, -500, 0, 50]));

// // Task6

// function getSumArr(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// console.log(getSumArr([80, 5, 58, 17, 100]));
// console.log(getSumArr([15, -500, 0, 50]));

// // Task7

// function Arr(array) {
//   let max = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     } else {
//     }
//   }
//   return max;
// }
// console.log(Arr([80, 5, 58, 17, 100]));

// // Task8.1

// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// function filterEmployees(arr) {
//   let filtered = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].salary > 60000) {
//       filtered.push(arr[i]);
//     }
//   }
//   return filtered;
// }
// console.log(filterEmployees(employees));

// // Task8.2

// const employes = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// function filterEmployes(arr) {
//   let filtered = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].department === "IT") {
//       filtered.push(arr[i]);
//     }
//   }
//   return filtered;
// }
// console.log(filterEmployes(employes));

// // Task9

// function findElement(array, number) {
//   let bool = true;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       bool = false;
//     }
//   }
//   return bool
//     ? `${number} array elementlerinden biri deyil`
//     : `${number} array elementlerinden biridir.`;
// }
// console.log(findElement([33, 28, 45, 17], 45));
// console.log(findElement([33, 28, 45, 17], 38));
// console.log(findElement(["a", "g", "y", "d"], "d"));

// // Task10

// function findSpace(text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//       count++;
//     }
//   }
//   return count;
// }
// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
// console.log(findSpace(sampleNews));

// // Task11 Daxil edilən iki arrayi birləşdirən funksiya yazın.

// function concatArray(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
//   }
//   return arr1; 
// }
// console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9]));

// // Task12

// function array_filled(number, symbol){
//     let newArr = [];
//     for (let i = 0; i < number; i++) {
//         newArr.push(symbol);
//     }
//     return newArr;
// }
// console.log(array_filled(6, 0));

// // Task13

// function move(arr, index, shift){
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if(index > shift){
//             if(i == shift)newArr.push(arr[index]);
//             if(i!= index)
//         }
        
//     }

// }
// console.log(move([10, 20, 30, 40, 50], 0, 2));






// // Task14

// function range(number1, number2){
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {


        
//     }
// }
// console.log(range(1, 4));
