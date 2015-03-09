/*

  An introduction to hoisting and understanding lexical scope in JavaScript.

  .....  YOUR MISSION  .....
  Rewrite this code so that functions and variables are declared in
  the correct order, without reliance upon hoisting, and the output
  of the outer() function should be the three numbers added together
  instead of multiplied.
*/


function outer (firstOperand) {
  var inner;

  // We assign a value to secondOperand *before* it's defined???
  secondOperand = 2;

  // Call the inner() function and store its output in returnValue
  var returnValue = inner();

  // Here is where we define secondOperand
  var secondOperand;

  // So what is it's value?
  console.log(secondOperand);

  // First definition of inner() multiplies the numbers
  function inner () {
    var thirdOperand = 3;

    return firstOperand * secondOperand * thirdOperand;
  }

  // Second definition of inner() adds the numbers
  inner = function () {
    var thirdOperand = 3;

    return firstOperand + secondOperand + thirdOperand;
  }

  return returnValue;

}

var output = outer(1);

console.log('output',output);
