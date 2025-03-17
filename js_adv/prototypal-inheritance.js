function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`hello, my name is ${this.name}`);
};
let names = ["gaurav", "asldkjf", "fdjh"];
names.forEach((element) => {
  new Person(element).greet();
});

//let name = new Person("gaurav");
//gaurav.greet();
