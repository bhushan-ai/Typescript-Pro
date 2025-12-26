//Interface creates only structure of objet they ain't put data in it

interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "masala",
  price: 20,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "c and c" };

//functions in Interface

interface DiscountCalculator {
  (price: number): number;
}

const applyToken: DiscountCalculator = (p) => p * 0.5;
console.log(applyToken);

//example

interface TMachine {
  start(): void;
  stop(): void;
}

const machine: TMachine = {
  start() {
    console.log(`Start`);
  },
  stop() {
    console.log(`stop`);
  },
};
console.log(machine);

//Index Signature

interface ChaiRating {
  [flavor: string]: number;
}
const ratings: ChaiRating = {
  masala: 4.5,
  ginger: 4.3,
};
console.log(ratings);

//Main use of interfaces

interface User {
  name: string;
}
interface User {
  age: number;
}

const user: User = {
  name: "bhushan",
  age: 22,
};

console.log(user);

//Extend interface

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}

