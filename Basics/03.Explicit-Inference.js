//Explicit typing and Type interference
// Explicit Typing: You explicitly declare the type of a variable
//Type Inference: TypeScript automatically determines the type based on the assigned value
//Explicit
//Boolean
var isActive = false;
//Number
var decimal = 2.4;
//String
var color = "red";
//Function explicit
function greet(name) {
    return "Hello ".concat(name);
}
//typescript automatical the parameter is strin or not
var msg = greet("bhushannnnn"); // Ohh hell yeahhhh broo
//const msg2 = greet(90); // Nooooo
console.log(msg);
// Type Interference
//TypeScript automatically determines the type of variable based on the assigned value
// TypeScript infers 'string'
var username = "alice";
// TypeScript infers 'number'
var score = 100;
// TypeScript infers 'boolean[]'
var flags = [true, false, true];
function add(a, b) {
    return a + b;
}
//const cal = add("2" ,"2") //Not allowed
var cal = add(2, 2);
console.log(cal);
