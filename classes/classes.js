//TypeScript adds types and visibility modifiers to JavaScript classes.
//The members of a class (properties & methods) are typed using type annotations, similar to variables.
//Members: Visibility
//Class members can also be given special modifiers that affect visibility.
//There are three main visibility modifiers in TypeScript.
//public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
//example
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var n1 = new Person("bhushannn");
// console.log(n1.name);
//Property 'name' is private and only accessible within class 'Person'.ts(2341)
console.log(n1.getName());
// The this keyword in a class usually refers to the instance of the class. Read more about this
///****Parameter Properties
//TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifier to the parameter.
var Person2 = /** @class */ (function () {
    //defining class mem in constructor by adddin visiblity modifier
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var p2 = new Person2("bhushannnnn");
console.log(p2.getName());
//**********Readonly
//Similar to arrays, the readonly keyword can prevent class members from being changed.
var Person3 = /** @class */ (function () {
    function Person3(name) {
        // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
        this.name = name;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    return Person3;
}());
var p3 = new Person3("bhushannnnnnnnnn");
console.log(p3.getName());
var Reactangle = /** @class */ (function () {
    function Reactangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Reactangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Reactangle;
}());
var A1 = new Reactangle(5, 10);
console.log(A1.getArea());
