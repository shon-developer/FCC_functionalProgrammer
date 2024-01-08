// The functions that take a function as an argument, or return a function as a return value, are called higher order functions.

// When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

const prepareTea = () => "greenTea";
console.log(prepareTea());

const getTea = (numOfTea) => {
  let teaCups = [];
  return numOfTea;
};

const tea4TeamFCC = getTea(4);
console.log(tea4TeamFCC);
