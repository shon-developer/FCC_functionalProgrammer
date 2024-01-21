//* Pass Arguments to Avoid External Dependence in a Function

//? Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(num) {
  let newValue = num + 1;
  return newValue;

  // Only change code above this line
}
console.log(incrementer(fixedValue));
