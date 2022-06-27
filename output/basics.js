"use strict";
const square = (n1, n2) => {
    return n1 ** n2;
};
const result = square(4, 2);
console.log(result);
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 40 ? 'Sir' : 'Mr.'} ${user.name}`);
};
// Function Signatures
let add;
add = (a, b) => a + b;
console.log(add(4, 5));
let userDescriptions;
userDescriptions = (id, user) => {
    console.log(`${id} ${user.name} ${user.age}`);
};
userDescriptions(123, {
    name: 'Tushar',
    age: 29
});
// CLASS
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} and age is ${this.age}`);
    }
}
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('Shakib', 38, 'Bangladesh');
// console.log(mashrafi.play());
// console.log(sakib.play());
const players = [];
players.push(sakib);
players.push(mashrafi);
console.log(players);
