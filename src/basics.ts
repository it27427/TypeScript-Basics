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