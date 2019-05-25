// I tested local variables outside of their funtion and learned different ways to test elements

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 111
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
