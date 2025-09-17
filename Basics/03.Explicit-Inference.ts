//Explicit typing and Type  Inference

// Explicit Typing: You explicitly declare the type of a variable
//Type Inference: TypeScript automatically determines the type based on the assigned value

//Explicit

//Boolean
let isActive: boolean = false;

//Number
let decimal: number = 2.4;

//String
let color: string = "red";

//Function explicit

function greet(name: string): string {
  return `Hello ${name}`;
}

//typescript automatical the parameter is strin or not
const msg = greet("bhushannnnn"); // Ohh hell yeahhhh broo
//const msg2 = greet(90); // Nooooo
console.log(msg);

// **Type  Inference

//TypeScript automatically determines the type of variable based on the assigned value

// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

function add(a: number, b: number) {
  return a + b;
}

//const cal = add("2" ,"2") //Not allowed
const cal = add(2, 2);
console.log(cal);
