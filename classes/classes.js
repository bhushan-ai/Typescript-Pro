//TypeScript adds types and visibility modifiers to JavaScript classes.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Reactangle1 = /** @class */ (function () {
    function Reactangle1(width, height) {
        this.width = width;
        this.height = height;
    }
    Reactangle1.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Reactangle1;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    Square.prototype.getArea = function () {
        return this.width * this.width;
    };
    return Square;
}(Reactangle1));
var a2 = new Square(2);
console.log(a2.getArea());
var a1 = new Reactangle(2, 4);
console.log(a1.getArea());
var Rectangle4 = /** @class */ (function () {
    function Rectangle4(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle4.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle4.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width, "] ,[height=").concat(this.height, "]");
    };
    return Rectangle4;
}());
var Square1 = /** @class */ (function (_super) {
    __extends(Square1, _super);
    function Square1(width) {
        return _super.call(this, width, width) || this;
    }
    Square1.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Square1;
}(Rectangle4));
var s1 = new Square1(5);
console.log(s1.getArea());
