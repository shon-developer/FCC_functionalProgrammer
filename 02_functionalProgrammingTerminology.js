//* Understand Functional Programming Terminology

//? Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument. The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.

// Function that returns a string representing a cup of green tea
let prepareGreenTea = () => "greenTea";
let prepareBlackTea = () => "blackTea";
// console.log(prepareTea());

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

const getTea = (prepareTea, numOfTea) => {
  const teaCups = [];
  for (let i = 1; i <= numOfTea; i++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeaTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeaTeamFCC = getTea(prepareBlackTea, 13);
console.log(tea4GreenTeaTeamFCC);
console.log(tea4BlackTeaTeamFCC);
