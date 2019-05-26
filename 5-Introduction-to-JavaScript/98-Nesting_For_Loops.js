// I learned how to loop sub-arrays and each sub element to modify a function

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var j=0; j < arr.length; j++){
    for (var k = 0; k < arr[j].length; k++){
      product = product * arr[j][k];
    }}
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
