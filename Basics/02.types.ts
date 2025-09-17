//5types

//Boolean
let isActive: boolean = false;

//Number
let decimal: number = 2.4;
let hex: number = 0xf00d;
let binary: number = 0b10101;

//String

let color: string = "red";

//Symbol ---> usefull for creating unique property nd constansts

const uniqueProperty = Symbol("discrip");

const obj = {
  [uniqueProperty]: "this is unique",
};

console.log(obj[uniqueProperty]);
