// objects are instances of the classes.
// defining a object
let car = {
  make: "toyota",
  model: "camry",
  launchYear: 2020,
  start: function() {
    return `${this.make} car got started in ${this.launchYear}`;
  },
};
console.log(car.start());
