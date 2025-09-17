//Union types are used when a value can be more than a single type.

//Such as when a property would be string or number.
//Union | (or)
//Using the | we are saying our parameter is a string or number:

function writeCode(code: string | number) {
  return `my code is ${code}`;
}

console.log(writeCode(404));

console.log(writeCode("500"));

//errrors
//return `my code is ${code.toUpperCase()}`;
//we can not use toUpperCase()
