//Ts Basic generic
//Generics allows to create type variables which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use
//makes easier to write reusable code
//Functions
//Generics with functions help create more general functions that accurately represent the input and return types.
function createPairs(v1, v2) {
    return [v1, v2];
}
console.log(createPairs("bhushann", "ingole"));
//Classes
//generic can be also used to create classes. like Map
var NameValue = /** @class */ (function () {
    function NameValue(name) {
        this.name = name;
    }
    NameValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NameValue.prototype.getValue = function () {
        return this._value;
    };
    NameValue.prototype.toString = function () {
        return "".concat(this.name, " - ").concat(this._value);
    };
    return NameValue;
}());
var value = new NameValue("my number");
value.setValue(20);
console.log(value.toString());
