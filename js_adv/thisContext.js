let person = {
  name: "gaurav",
  greet() {
    console.log(`hi, I am ${this.name}`);
  },
};
person.greet(); //hi, I am gaurav

const greetFunction = person.greet;
greetFunction(); //hi, I am undefined

const boundGreet = person.greet.bind({ name: "JOHN" });
boundGreet(); //hi, I am JOHN

//read: bind, call, apply;
