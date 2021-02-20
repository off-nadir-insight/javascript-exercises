const removeFromArray = function(arr, ...thingsToRemove) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (thingsToRemove.includes(arr[i])) {

    } else {
      newArray.push(arr[i]);
    }
  }
  // console.log(newArray);
  return newArray;
}

// removeFromArray([1, 2, 3, 4], 3)
// removeFromArray([1, 2, 3, 4], 3, 2)

module.exports = removeFromArray
