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
// IMPORT PLAYER
import { Player } from './classes/Player.js';
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('Shakib', 38, 'Bangladesh');
// console.log(mashrafi.play());
// console.log(sakib.play());
const players = [];
players.push(sakib);
players.push(mashrafi);
console.log(players);
function drowRectangle(options) {
    let width = options.width;
    let length = options.length;
}
const drowResult = drowRectangle({
    width: 30,
    length: 20
});
console.log(drowResult);
let sakibAl;
sakibAl = new Player('Sakib-Al-Hasan', 39, 'Bangladesh');
console.log(sakibAl);
const allPlayer = [];
allPlayer.push(sakib);
allPlayer.push(mashrafi);
allPlayer.push(sakibAl);
// Generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100 + 1);
    return Object.assign(Object.assign({}, obj), { id });
};
let myUser = addID({
    name: 'Istiak',
    age: 29,
    country: 'Bangladesh'
});
console.log(myUser.id);
console.log(myUser.name);
console.log(myUser.age);
console.log(myUser.country);
console.log(myUser);
// Enum Types
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponseType[ResponseType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponseType || (ResponseType = {}));
;
const response1 = {
    state: 200,
    type: ResponseType.UNAUTHENTICATED,
    data: {
        name: 'Tushar',
        age: 29
    }
};
console.log(response1);
// Tuples
let a = ['IT', 29, { p: 2 }];
let b = [2, 'Tushar', { name: 'Nishi' }];
