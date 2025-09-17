//TypeScript Functions
//Return type
//// the `: number` here specifies that this function returns a number
function getDate() {
    return new Date().getTime();
}
var time = getDate();
console.log("time", time);
//Void Return type
function helllo() {
    console.log("Hie");
}
helllo();
//parameters
function add(a, b) {
    return a + b;
}
var addition = add(2, 4);
console.log("addition", addition);
//Optionap parameter
// the `?` operator here marks parameter `c` as optional
function mul(a, b, c) {
    return a * b * (c || 0);
}
var multification = mul(2, 4);
console.log("multification", multification);
//Default Parameters
// For parameters with default values, the default value goes after the type annotation:
function defaultParams(value, exponent) {
    if (exponent === void 0) { exponent = 0; }
    return Math.pow(value, exponent);
}
var expo = defaultParams(2, 5);
console.log("expo", expo);
//Named Parameters
//Typing named parameters follows the same pattern as typing normal parameters.
