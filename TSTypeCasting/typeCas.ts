//TypeScript  Casting

//There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

//PROCESS OF OVERRINDING THE TYPES

let x: unknown = "bhushannnn";

const name1Len = (x as number).toString();

console.log("whats the name: ", name1Len);

//Casting doesn't actually change the type of the data within the variable

//CASTING WITH <>

//Using <> works the same as casting with as.

interface IUser {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

const user = <IUser>{
  name: "bhushann",
  age: 21,
  isLoggedIn: true,
};

console.log("name of user", user.name);
console.log("age of user", user.age);


