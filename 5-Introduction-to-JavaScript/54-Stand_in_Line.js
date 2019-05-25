// I learned what a queue is and had a difficult time trying to move elements in an array

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var element = arr.shift(item);

  return element;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
