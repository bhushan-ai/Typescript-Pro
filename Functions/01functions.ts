//TypeScript Functions

//Return type

//// the `: number` here specifies that this function returns a number

function getDate(): number {
  return new Date().getTime();
}

const time = getDate();
console.log("time", time);

//Void Return type

function helllo(): void {
  console.log("Hie");
}

helllo()


//parameters

function add(a: number, b: number) {
  return a + b;
}

const addition = add(2, 4);
console.log("addition", addition);

//Optionap parameter
// the `?` operator here marks parameter `c` as optional

function mul(a: number, b: number, c?: number) {
  return a * b * (c || 0);
}

const multiply = mul(2, 4);
console.log("multiplication", multiply);

//Default Parameters
// For parameters with default values, the default value goes after the type annotation:

function defaultParams(value: number, exponent: number = 0) {
  return value ** exponent;
}

const expo = defaultParams(2, 5);

console.log("expo", expo);

//Named Parameters

//Typing named parameters follows the same pattern as typing normal parameters.
