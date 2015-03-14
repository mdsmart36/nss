// Literal object module

var basicCarModule = {

  color: "blue",
  size: "sedan",
<<<<<<< HEAD
=======

>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
  options: {
    sunRoof: true,
    racingStripes: false,
    spoiler: false,
<<<<<<< HEAD
    leather: true
=======
    leatherSeats: true,
    heatedSeats: true,
    underLighting: false
  },

  setSpoilerOption: function (spoiler) {
    this.options.spoiler = spoiler;
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
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

<<<<<<< HEAD
basicCarModule.setColor("green");

console.log(basicCarModule);


//----------------- MODULE PATTERN ------------

var module = (function () {
  var color = "blue";

  return {
    a: 1,
    getColor: function () {
      return color;
    },
    setColor: function (color) {
      this.color = color;
    }
  }

})();

var myModule = module;
=======
})();

module.setColor("green");
console.log(module.getColor());
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
