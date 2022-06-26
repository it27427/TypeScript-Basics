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
