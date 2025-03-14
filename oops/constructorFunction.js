function greet(name) {
  console.log("hello", name);
}
greet("asas");

//constructor function
function car(companyName, modelName) {
  this.companyName = companyName;
  this.modelName = modelName;
}
//object/instance
let myCar = new car("toyota", "Camry");
console.log(myCar);
let myNewCar = new car("tata", "safari");
console.log(myNewCar);

//removing the "new" keyword, will output undefined.
//to create a object, have to use the keyword "new"

function toyota(industry) {
  this.industry = industry;
  //describing a function
  this.describe = () => {
    return `this company is working in ${this.industry} industry.`;
  };
}
let abc = new toyota("automotive");
console.log(abc);
console.log(abc.describe()); //using describe function defined inside toyota

function animal(species) {
  this.species = species;
}
//using arrow function here, makes dog variable undefined
animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};
let dog = new animal("Dog");
console.log(dog.sound());
let cat = new animal("Cat");
console.log(cat.sound());
