//** TypeScript Object Types
//TypeScript has a specific syntax for typing objects.
var car = {
    type: "toyota",
    model: "supra",
    year: 2015,
};
console.log("car--->", car);
//Type Inference
var car2 = {
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
var car4 = {
    type: "toyota",
    model: "supra",
};
car4.milage = 400; // err not comminng coz (?) is there
console.log("car4--->", car4);
//------------********---------------
////Index Signatures
//Index signatures can be used for objects without a defined list of properties.
var nameAgeMap = {};
nameAgeMap.Jack = 25;
nameAgeMap.Op = 90;
console.log("nameAgeMap--->", nameAgeMap);
//------------********---------------
var carNameandModel = {};
carNameandModel.Supra = "Toyota";
carNameandModel.BMWi7 = "BMW";
console.log("carNameandModel--->", carNameandModel);
