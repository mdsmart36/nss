function outer (firstOperand) {
  var inner;
  var secondOperand = 2;

  function inner () {
    var thirdOperand = 3;

    console.log(firstOperand * secondOperand * thirdOperand);
  }

  return inner;
}

var output = outer(1);
output();
