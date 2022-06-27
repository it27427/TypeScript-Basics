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

// CLASS
class Player {
  name: string;
  age: number;
  country: string;

  constructor(name: string, age: number, country: string) {
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

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);

console.log(players);