const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Using Map
const newMap = myNums.map((e) => e + 10);
console.log(newMap);

// Using forEach
let arr = [];
const newNum = myNums.forEach((e) => arr.push(e * 3));
console.log(arr);
