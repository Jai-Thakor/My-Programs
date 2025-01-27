const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using filter
const newNums = myNums.filter((e) => e > 4);
console.log(newNums);

//Using forEach
let arr = [];
myNums.forEach((e) => {
  if (e > 3) {
    arr.push(e);
  }
});
console.log(arr);
