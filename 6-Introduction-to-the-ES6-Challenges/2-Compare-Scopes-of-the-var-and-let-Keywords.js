// I learned how let can allow a variable to have different values locally

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
  let  i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
