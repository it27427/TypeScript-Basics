const square:Function = (n1: number, n2: number):number => {
  return n1 ** n2;
}

const result = square(4, 2);

console.log(result);

// Type Aliases
type stringOrNumber = string | number;
type userType = { name: string, age: number };

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`)
}

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 40 ? 'Sir' : 'Mr.'} ${user.name}`)
}

// Function Signatures
let add: (x:number, y: number) => number;

add = (a: number, b: number) => a + b;

console.log(add(4, 5));

let userDescriptions: (id: number | string, userInfo: {
  name: string,
  age: number
}) => void;

userDescriptions = (id: number | string, user: {
  name: string,
  age: number
}) => {
  console.log(`${id} ${user.name} ${user.age}`);
}

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

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);

console.log(players);

// Interfaces
interface rectangleOptions {
  width: number;
  length: number;
}

function drowRectangle(options: rectangleOptions) {
  let width = options.width;
  let length = options.length;
}

const drowResult = drowRectangle({
  width: 30,
  length: 20
});

console.log(drowResult);


import { isPlayer } from './interfaces/isPlayer.js';

let sakibAl: isPlayer;

sakibAl = new Player('Sakib-Al-Hasan', 39, 'Bangladesh');

console.log(sakibAl);

const allPlayer: isPlayer[] = [];

allPlayer.push(sakib);
allPlayer.push(mashrafi);
allPlayer.push(sakibAl);

// Generics
const addID = <T extends {
  name: string,
  age: number,
  country: string
}>(obj: T) => {
  let id = Math.floor(Math.random() * 100 + 1);
  return { ...obj, id }
}

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
enum ResponseType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

interface APIresponse<T> {
  state: number;
  type: ResponseType;
  data: T;
}

const response1: APIresponse<object> = {
  state: 200,
  type: ResponseType.UNAUTHENTICATED,
  data: {
    name: 'Tushar',
    age: 29
  }
};

console.log(response1);

// Tuples

let a = ['IT', 29, {p: 2}];

let b: [number, string, object] = [2, 'Tushar', {name: 'Nishi'}]