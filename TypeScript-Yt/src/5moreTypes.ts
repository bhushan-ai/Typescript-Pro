//Type assertion

let response: any = "42";

let numericLength = (response as string).length;

//another example

type Book = {
  name: string;
};

let bookString = ' { " name": "Theory of Everything" }';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

//another case of input ELement

// const inputElement = document.getElementById("username") as HTMLInputElement;

//unknown any
let value: any;

value = "op";
value = [1, 2, 3, 4];
value = 2.5;
// value.toUpperCase(); //no error coming

let newValue: unknown;

newValue = "op";
newValue = [1, 2, 3, 4];
newValue = 2.5;
//newValue.toUpperCase()//error coming

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

console.log(newValue);

//try catch block

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

//forcefully assertion of type
const data: string = "something";
const strData: string = data as string;

console.log(strData);

//never type

type Role = "Admin" | "User";

function redirectBasedOnRole(role: Role): void {
  if (role === "Admin") {
    console.log(`Redirecting to admin dashboard`);
    return;
  }
  if (role === "User") {
    console.log(`Redirecting to user dashboard`);
    return;
  }
  role; //its saying role never
}

function neverReturn(): never {
  while (true) {}
}
