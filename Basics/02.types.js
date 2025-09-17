//5types
var _a;
//Boolean
var isActive = false;
//Number
var decimal = 2.4;
var hex = 0xf00d;
var binary = 21;
//String
var color = "red";
//Symbol ---> usefull for creating unique property nd constansts
var uniqueProperty = Symbol("discrip");
var obj = (_a = {},
    _a[uniqueProperty] = "this is unique",
    _a);
console.log(obj[uniqueProperty]);
