//its a template like Interface

//<T> generic
//if  u pass T dt if u pass in array u will get same datatype which u pass in T

function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArray("masala"))
console.log(wrapInArray(43))
console.log(wrapInArray({
  flavor: "ginger",
}))

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

console.log(pair("masala", 22));
console.log(pair("masala", "ginger"));
console.log(
  pair("masala", {
    flavor: "ginger",
  })
);

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };
const numberBoxCup: Box<string> = { content: "10" };

console.log(numberBox)
console.log(numberBoxCup)


interface ApiPomise<T> {
  status: number;
  data: T;
}
const res: ApiPomise<{ flavor: string }> = {
  status: 200,
  data: {
    flavor: "masala",
  },
};

console.log(res)