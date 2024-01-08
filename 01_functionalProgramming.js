//* Learn About Functional Programming

//? In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

const prepareTea = () => "greenTea";

const getTea = (numOfTea) => {
  let teaCups = [];
  for (let i = 1; i <= numOfTea; i++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const teaForTeamFCC = getTea(4);
console.log(teaForTeamFCC);
