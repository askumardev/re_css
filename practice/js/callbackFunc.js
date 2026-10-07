function sum(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function display(x, y, operation) {
  var result = operation(x, y);
  console.log(result);
}

// Call the display function
display(4, 5, sum);

display(4, 5, multiply);  


// node practice/js/callbackFunc.js