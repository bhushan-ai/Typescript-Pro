//normal obj

const chai = {
  name: "masala",
  price: 12,
  isHot: true,
};

//define type of object first

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "masala",
  price: 12,
  isHot: true,
};

//TS alias Objects

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "ginger",
  price: 34,
  ingredients: ["adrak", "tea leaves"],
};

//
type Cup = { size: string };
let smallCup: Cup = { size: "500ml" };

let bigCup = { size: "200ml", material: "plastic" };

smallCup = bigCup;

//show error if data is not filled

type User = {
  username: string;
  password: number;
};

const u: User = {
  username: "op",
  password: 123, // if we ain't add pass i would show the err
};

//split out object

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

const orderPlace: Order = {
  id: "1",
  items: [{ name: "shirt", quantity: 2 }],
  address: { street: "road", pin: 1234 },
};

console.log(orderPlace.items);

//using objects  in different ways

//1.Partial: u can give values partially i convert the type to optional
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (order: Partial<Chai>) => {
  console.log(updateChai);
};

updateChai({ price: 25 });

//2. Required : it makes all properties required even if u make it optional while declaring in type

type ChaiOrder = {
  name?: string;
  price?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "ginger", price: 22 });

//3. pick: u can pick the properties that u need only

type Chai1 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChai = Pick<Chai1, "name" | "price">;

const ChaiInfo: BasicChai = {
  name: "lemon",
  price: 22,
};

console.log(ChaiInfo);

//4. Omit: u can specify which to omit/ which u don't want to use

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type publicChai = Omit<ChaiNew, "secretIngredients">;

