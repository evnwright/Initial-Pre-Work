// I learned a return is undefined globally but the function can be called and processed without defining a return

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5
}


// Only change code above this line
var returnedValue = addFive();
