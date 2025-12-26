//class
class Chai {
  flavour: string;
  price: number;
  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
  //   constructor(flavour: string) {
  //     this.flavour = flavour;
  //     console.log(this);
  //   }
}

const masalaChai = new Chai("masala", 20);

// console.log((masalaChai.flavour = "masala"));
// console.log((masalaChai.price = 20));
console.log(masalaChai);

//Access Modifier

//1.Public: access outside the class
//2.Protected: access inside the class u can't access directly u define methods

class Chai1 {
  public masalaChai: string = "masala chai";
  private secretIngresdiants = "Cardamon";

  reveal() {
    return this.secretIngresdiants; //ok
  }
}

const c = new Chai1();
console.log(c.reveal());

//3.Protected: access within class or which class is inherited they can access it

class Shop {
  protected shopName: string = "Chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}
console.log(new Branch().getName());

//Another syntax of private
class Wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}
console.log(new Wallet().getBalance);

//ReadOnly property

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
console.log(new Cup(2).capacity);

//Control Gates 1. Getters 2. Setters
//1. Getters : when we cant't access values directly that time we can u getters for access the values
//2. Setters : when we cant't access values directly that time we can u Setters for set the values

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const c1 = new ModernChai();
console.log((c1.sugar = 4));

//Static Members

class EkChai {
  static shopName = "chai Code Cafe";
  constructor(public flavour: string) {}
}
console.log(EkChai.shopName);

//Abstract Classes
abstract class Drink {
  abstract make(): void;
}
class MyChai extends Drink {
  make(): void {
    console.log("Brewing chai");
  }
}
console.log(new MyChai().make());

//Composition topic: without using inheritance accessing the class methods and properties

class Heater {
  heat(type: string) {
    console.log(`making ${type} chai`);
  }
}

class ChaiMaker {
  constructor(private heater: Heater) {}
  make(type:string) {
    this.heater.heat(type);
  }
}

const heater = new Heater();
const chaiMaker = new ChaiMaker(heater);
chaiMaker.make("cutting");
