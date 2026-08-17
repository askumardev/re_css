// node practice/smallest.js

function findSmallest(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

module.exports = { findSmallest };


console.log(findSmallest([5, 2, 8, 1, 9]));
console.log(findSmallest([-5, -2, -8, -1]));