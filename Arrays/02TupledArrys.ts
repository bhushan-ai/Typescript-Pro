//Typed arayss

//TUPLE

//A tuples is typed array with predefined datatypes for each index

//Tuples are great because they allow each element in the array to be a known type of value.

let ourTuple: [number, boolean, string];

//initialize
ourTuple = [2, true, "bhushann"]; //--> right order

//ourTuple=[true,3,'op'] // error coz wrong orderr

ourTuple.push(3);

console.log(ourTuple);

//Readonly Tuple

const readOnlyTuple: readonly [number, string, boolean] = [2, "op", false];

//readOnlyTuple.push --> this property is not available toreadoonly

//NAMED TUPLES

//Named tuples allow us to provide context for our values at each index.

const graph: [x: number, y: number] = [22.3, 34.3];

//Destructuring Tuples
const graph1: [number, number] = [44.3, 33.4];
const [x, y] = graph;
