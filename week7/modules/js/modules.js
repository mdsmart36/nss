var basicCarModule = {
  color: "blue",
  size: "sedan",
  price: 0,

  options: {
    powerSteering: true,
    sunroof: true,
    heatedSeats: false,
    racingStripes: false
  },

  setPrice: function (newPrice) {
    this.price = newPrice;
  },

  setColor: function (newColor) {
    this.color = newColor;
  }

}

console.log(basicCarModule);

basicCarModule.setColor("red");

console.log(basicCarModule);
