//TypeScript adds types and visibility modifiers to JavaScript classes.

//The members of a class (properties & methods) are typed using type annotations, similar to variables.

//Members: Visibility
//Class members can also be given special modifiers that affect visibility.
//There are three main visibility modifiers in TypeScript.

//public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

//example

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

const n1 = new Person("bhushannn");
// console.log(n1.name);
//Property 'name' is private and only accessible within class 'Person'.ts(2341)

console.log(n1.getName());
// The this keyword in a class usually refers to the instance of the class. Read more about this

///****Parameter Properties
//TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifier to the parameter.

class Person2 {
  //defining class mem in constructor by adddin visiblity modifier
  public constructor(private name: string) {}
  public getName() {
    return this.name;
  }
}

const p2 = new Person2("bhushannnnn");
console.log(p2.getName());

//**********Readonly
//Similar to arrays, the readonly keyword can prevent class members from being changed.

class Person3 {
  private readonly name: string;
  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
    this.name = name;
  }
  public getName() {
    return this.name;
  }
}

const p3 = new Person3("bhushannnnnnnnnn");
console.log(p3.getName());

//******** Inheritance: Implements

//Interfaces can be used to define the type a class must follow through the implements keyword.

interface Shape {
  getArea: () => {};
}

class Reactangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const A1 = new Reactangle(5,10)
console.log(A1.getArea());
