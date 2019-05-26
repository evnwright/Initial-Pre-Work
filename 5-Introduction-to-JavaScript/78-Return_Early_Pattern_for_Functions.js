// I learned a return statement ends execution of a function and how to purposefully return undefined. I also was able to learn how much time I can waste from making small mistakes that I fail to notice

// Setup
function abTest(a, b) {
  // Only change code below this line
   if (a < 0 || b < 0) {
    return undefined;
  }




  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
