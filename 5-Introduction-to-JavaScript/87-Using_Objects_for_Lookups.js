// I learned how to lookup information from an object when I haave an idea of what is stored in it

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
     "alpha": "Adams",
     "bravo": "Boston",
     "charlie": "Chicago",
      "delta": "Denver",
      "echo":  "Easy",
     "foxtrot": "Frank",
  };
return result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
