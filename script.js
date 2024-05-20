let message = "Hello World";
console.log(message);

const pi = 5.14;

let bigNumber = 12345678901234567890n;

let truth = true;
let falsy = false;

let doLater;

const colours = ["red", "green", "blue"];

const numbers = [1, 2, 3];

const user = {
  name: "John",
  age: 30,
};

console.log(user.age);

{
  let a = 5;
  {
    let b = 2;
    let product;
    {
      let c = 3;
      product = a * b * c;
    }
    console.log(product);
  }
}
