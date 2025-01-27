let createCounter = () => {
  let count = 0;
  return {
    increment: () => {
      count++;
        // console.log("Count:", count);
    },
    decrement: () => {
      count--;
      //   console.log("Count:", count);
    },
    getCount: () => {
      return `Current Count: ${count}`;
    },
  };
};

let counter = createCounter();
counter.increment();
