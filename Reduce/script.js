const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// With Return
const Total = myNums.reduce((acc, val) => {
  console.log(`Accumulator: ${acc} & Current Val : ${val}`);
  return val + acc;
}, 0);
console.log(`Total:`,Total);
//Without Return 
const sum = myNums.reduce((acc, val) => acc + val, 0);
console.log(`Sum:`, sum);
//Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumofNums = numbers.reduce((acc, val) => {
  console.log(`Accumlator:${acc} and Value:${val}`);
  return acc * val;
}, 1);
console.log(`Total:`,sumofNums);