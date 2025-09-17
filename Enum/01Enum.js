//Typescript Enum
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Comes in two flavors 1. Numeric 2. String
//Numeric
var Fourdirections;
(function (Fourdirections) {
    Fourdirections[Fourdirections["est"] = 1] = "est";
    Fourdirections[Fourdirections["west"] = 2] = "west";
    Fourdirections[Fourdirections["north"] = 3] = "north";
    Fourdirections[Fourdirections["south"] = 4] = "south";
})(Fourdirections || (Fourdirections = {}));
//let Fourdirections = Fourdirections.est`
console.log(Fourdirections.est);
