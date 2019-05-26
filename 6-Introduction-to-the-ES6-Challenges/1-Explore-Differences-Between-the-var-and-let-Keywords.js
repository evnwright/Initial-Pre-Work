// I learned when ES5 and ES6 were released and the benefits of using let and strict mode

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
