//type inference in TS

const drink = "tea"; //assign dt automatically
let cups = Math.random() > 0.5 ? 5 : 10;

console.log("drink:", drink);
console.log("cups:", cups);

//type Annotation

//string annotation , number , boolean
let chaiFlavour: string = " masala chai"; //assign annotation manually

chaiFlavour = "ginger tea";

console.log("chai flavour", chaiFlavour);
