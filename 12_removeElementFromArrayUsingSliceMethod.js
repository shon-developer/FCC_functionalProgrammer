//* Remove Elements from an Array Using slice Instead of splice

//? Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

function nonMutatingSplice(cities) {
  let slice3 = cities.slice(0, 3);
  return slice3;
}
console.log(
  nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])
);
