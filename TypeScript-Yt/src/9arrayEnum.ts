const chaiFlavours: string[] = ["masala", "adrak"];
const chaiPrice: number[] = [10, 23];
console.log(chaiFlavours);
console.log(chaiPrice);
//1.Array

const ratting: Array<number> = [4.5, 4.6];
console.log(ratting);
//array of objects

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "masala", price: 10 },
  { name: "ginger", price: 20 },
];

menu.push({ name: "normal", price: 20 });
console.log(menu);
//ReadOnly array

const cities: readonly string[] = ["pune", "nanded"];

//Multidimensional array

const table: number[][] = [
  [1, 2, 3],
  [1, 3, 4],
];

//2.Tuples

let chaiTuple: [string, number];
chaiTuple = ["masala", 2];
//chaiTuple = [2, "masala"]; u can write it only sequentially

let userInfo: [string, number, boolean?];
userInfo = ["op", 23, true];
userInfo = ["op", 23];

//readonly tuple
const location: readonly [number, number] = [22.44, 55.4];

//Tuple naming

const chaiItem: [name: string, price: number] = ["masala", 25];

//3.ENUMS

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}
const size = CupSize.LARGE;
console.log(size);

//Auto increment values
enum StatusCode {
  PENDING = 1,
  REJECTED, //2
  DELIVERED, //3
}

const code = StatusCode.REJECTED;
console.log(code);

//use for constant values

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(type: ChaiType) {
  console.log(type);
}
makeChai(ChaiType.GINGER);

//heterogeneous values
//enum should only one data type it is a standard approach
enum RandomEnum {
  ID = 1,
  NAME = "OP",
}

const num = RandomEnum.ID;
console.log(num);

//You can make it constant using Const keyword

const enum Sugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const sugar = Sugar.HIGH;
console.log(sugar);

//need to take care

let t: [string, number] = ["number", 2];
t.push("bhushan");
console.log(t);
