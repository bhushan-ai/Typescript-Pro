//Ts Basic generic

//Generics allows to create type variables which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use

//makes easier to write reusable code

//Functions
//Generics with functions help create more general functions that accurately represent the input and return types.

function createPairs<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPairs<string, string>("bhushann", "ingole"));

//Classes
//generic can be also used to create classes. like Map

class NameValue<T> {
  private _value: T | undefined;

  public constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name} - ${this._value}`;
  }
}

const value = new NameValue("my number");
value.setValue(20);
console.log(value.toString());
