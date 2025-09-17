//Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

const height = rectangle.height;
console.log(height);
