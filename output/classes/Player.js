// CLASS
export class Player {
    // name: string;
    // age: number;
    // country: string;
    // Access Modifiers
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
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
