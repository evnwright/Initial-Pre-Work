// I was able to create a function that has real world applications and I was reminded how going over the directions and checking for small mistakes is crucial to progressing in these lessons

var count = 0;

function cc(card) {
  // Only change code below this line
   switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count ++;
    break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count --;
    break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {

  return count + " Hold";
  }

  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
