//ts has specefic syntax for typing arrays
//****for string arrays
var names = [];
// names.push(22) ---> Ohh hell nah brooo
// error --> (Argument of type 'number' is not assignable to parameter of type 'string'.)
names.push("bhushannn"); // Ohh hell yeahh bruhh
console.log("names-->", names);
//Readonly
// ---> The readonly keyword can prevent arrays from being changed.
var names1 = ["op"];
//names1.push('bhushannn')// Ohh hell nahh bruhh
//---> U can't push value here coz readonly is there
//Number
//Type Inference
//TypeScript can infer the type of an array if it has values.
var num = [1, 2, 3]; //inference
//num.push('op') //---> ohh hell nah broo this is string
num.push(4); // Ohh hell yeahh bruhh
console.log("num-->", num);
