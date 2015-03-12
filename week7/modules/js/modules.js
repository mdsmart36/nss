// Literal object module

var basicCarModule = {

  color: "blue",
  size: "sedan",

  options: {
    sunRoof: true,
    racingStripes: false,
    spoiler: false,
    leatherSeats: true,
    heatedSeats: true,
    underLighting: false
  },

  setSpoilerOption: function (spoiler) {
    this.options.spoiler = spoiler;
  },

  setColor: function (color) {
    this.color = color;
  },

  setOptions: function (options) {
    this.options = options;
  }

}

console.log('basicCarModule', basicCarModule);
basicCarModule.setColor("green");
console.log('basicCarModule', basicCarModule);




// IIFE
// Immediately invoked function expression
// For private state


var module = (function () {
  var color = "blue";

  return {
    a: 1,
    getColor: function () {
      return color;
    },
    setColor: function (newColor) {
      color = newColor;
    }
  };

})();

module.setColor("green");
console.log(module.getColor());
