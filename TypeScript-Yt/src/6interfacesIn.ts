//Literals  types

type Order = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: Order) {
  console.log(order);
}

console.log(
  makeChai({
    type: "masala",
    sugar: 2,
    strong: true,
  })
);

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaT implements TeaRecipe {
  water = 100;
  milk = 50;
} //no problem here

//interface
interface CupSize {
  size: "small" | "medium";
}

class Chai implements CupSize {
  size: "small" | "medium" = "medium";
}

type Response = { ok: true } | { ok: false };

//examples

type teaType = "masala" | "ginger" | "lemon";

function orderChai(t: teaType) {
  console.log(t);
}
console.log(orderChai("ginger"));

//intersection

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

console.log(cup);

//optional values

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "op" };
const u2: User = { username: "op1", bio: "bhushan.ai" };

console.log(u1)
console.log(u2)

//readOnly values

type Config ={
 readonly appName:string
 version:number
}

//you can define it only one time
const cfg:Config ={
    appName:'Ecom App',
    version:1
}

//cfg.appName= 