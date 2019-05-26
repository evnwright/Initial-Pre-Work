// I learned that a variable's value can still be changed even when declared by the constant operator

const S = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
 s[0] = 2;
 s[1] = 5;
 s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
