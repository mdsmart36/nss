/*
  ...........YOUR MISSION...........

  Write a function that returns a function so that the
  following call can be made.

*/

function () {
  return function () {
    return;
  }
}

var add2 = add(2);
var added = add2(3);
console.log(added);  // This should output 5
