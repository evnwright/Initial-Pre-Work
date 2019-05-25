// I used the string concatenator to create a string and practiced using spaces to complete my string

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result+= "I "+myAdverb+" "+myVerb+" my "+myNoun+" outside so there wouldn't be a "+myAdjective+ " poop inside.";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
