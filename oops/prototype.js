let car = { tyres: "4" };
let mycar = { driver: "ai" };
Object.setPrototypeOf(mycar, car);
console.log(`mycar`, Object.getPrototypeOf(mycar));
