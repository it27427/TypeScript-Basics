
import { isPlayer } from '../interfaces/isPlayer.js';

// CLASS
export class Player implements isPlayer {
  // name: string;
  // age: number;
  // country: string;

  // Access Modifiers
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  // constructor(name: string, age: number, country: string) {
  //   this.name = name;
  //   this.age = age;
  //   this.country = country;
  // }

  getAge() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} and age is ${this.age}`);
  }
}