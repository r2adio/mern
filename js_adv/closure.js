//DEFINITION:
//closers are functions, that remember the environment in which they created.
//??: function can retain the variables which are declared outside of it.
function outer(counter) {
  //let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}
let increment = outer(4);
//here last updated value isn't forgotten'
console.log(increment()); //5
console.log(increment()); //6
console.log(increment()); //7
