//** TypeScript Object Types

//TypeScript has a specific syntax for typing objects.

const car: { type: string; model: string; year: number } = {
  type: "toyota",
  model: "supra",
  year: 2015,
};

console.log("car--->", car);

//Type Inference

const car2 = {
  type: "Toyota",
};
car2.type = "Ford"; // no error
console.log("car2--->", car2);

//car.type = 2; //Type 'number' is not assignable to type 'string'.

// ---------*********-------------------
//Optional Properties

//Optional properties are properties that don't have to be defined in the object definition.

// const car3: { type: string; milage: number } = {
//   //err milage is missing
//   type: "toyota",
// };
// car3.milage = 2000;

// --------*****----------------------------

//Example with optional ( ?)

const car4: { type: string; model: string; milage?: number } = {
  type: "toyota",
  model: "supra",
};

car4.milage = 400; // err not comminng coz (?) is there
console.log("car4--->", car4);

//------------********---------------

////Index Signatures

//Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Op = 90;

console.log("nameAgeMap--->", nameAgeMap);

//------------********---------------

const carNameandModel: { [type: string]: string } = {};
carNameandModel.type = "Toyota";

console.log("carNameandModel--->", carNameandModel);
