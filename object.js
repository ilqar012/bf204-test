// // function Human(fullName, age) {
// //   this.fullName = fullName;
// //   this.age = age;
// // }
// // function Employee(salary, department, experinceYear) {
// //   this.salary = salary;
// //   this.department = department;
// //   this.experinceYear = experinceYear;
// // }

// // const ilgar = new Human("ilgar", 20);
// // Object.setPrototypeOf(ilgar, new Employee(1000, "IT", "5"));
// // const ilvin = new Human("ilgar", 20);
// // Object.setPrototypeOf(ilvin, new Employee(1000, "HR", "4"));
// // const ferid = new Human("ilgar", 20);
// // Object.setPrototypeOf(ferid, new Employee(1000, "HR", "6"));
// // const sefer = new Human("ilgar", 20);
// // Object.setPrototypeOf(sefer, new Employee(1000, "IT", "2"));

// // let employees = [ilgar,ilvin,ferid,sefer];
// function filterEmployes(arr) {
//     let filtered = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].department === "IT" && arr[i].experinceYear > "5") {
//         filtered.push(arr[i]);
//       }
//     }
//     return filtered;
//   }
//   console.log(filterEmployes(employees));

// // Task1

// function volumeOfBox(obj) {
//   return obj.width * obj.length * obj.height;
// }
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));

// // Task2

// function capitalizeEachWords(param) {
//   param = param.split(" ");
//   for (let i = 0; i < param.length; i++) {
//     param[i] = param[i][0].toUpperCase() + param[i].slice(1);
//   }
//   return param.join(" ");
// }
// console.log(capitalizeEachWords("lorem ipsum dolar"));

// // Task3

// function getMaxLengthWord(sentence) {
//   sentence = sentence.split(" ");
//   let max = sentence[0];
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i].length > max.length) {
//       max = sentence[i];
//     }
//   }
//   return max;
// }
// console.log(getMaxLengthWord("Salam biz coderik"));


// // TAsk4
// function number(arr) {
//   let array = [];
//   arr.forEach((element) => {
//     if (typeof element === "number") {
//       array.push(element);
//     }
//   });
//   return array;
// }
// console.log(number(null));
