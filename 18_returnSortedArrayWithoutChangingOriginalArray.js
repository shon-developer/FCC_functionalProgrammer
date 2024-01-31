//* Return a Sorted Array Without Changing the Original Array

//? Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = arr.alice();
  return newArr.sort(function (a, b) {
    return a < b ? -1 : 0;
  });
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
