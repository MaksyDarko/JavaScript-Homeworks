// 1st Task

let sum = 0;
let number = 1;

while (number <= 10) {
  sum += number;
  number++;
}

console.log(`the sum of the numbers 1 and 10 is: ${sum}`);

// 2nd Task

let fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];
let char = "a";
let i = 0;

while (i < fruits.length) {
  if (fruits[i].includes(char)) {
    console.log(fruits[i].toUpperCase());
  } else if (fruits[i].length > 5) {
    console.log(`${fruits[i]} has more than 5 characters in it.`);
  } else {
    console.log(`${fruits[i]} is a short fruit name.`);
  }
  i++;
}

// 3rd Task

let cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  `Miami`,
];
let c = 0;

do {
  if (cities[c].includes("o")) {
    console.log(cities[c].replaceAll("o", "0"));
  } else if (cities[c].length > 8) {
    console.log(`${cities[c].slice(0, 8)}...`);
  } else {
    console.log(`${cities[c]} has ${cities[c].length} characters inside`);
  }
  c++;
} while (c < cities.length);

// 4th Task

let numbers = [1, 2, 3, 4, 5];
let result = [];

for (let number of numbers) {
  result[numbers.indexOf(number)] = number * number;
}
console.log(`The squares of numbers from 1 to 5 are: ${result.join(", ")}`);

// 5th Task

let nameAndSurname = `Darko Maksimovikj`;
let unicodeResult;
for (let code of nameAndSurname) {
  unicodeResult = nameAndSurname.charCodeAt(nameAndSurname.indexOf(code));
  console.log(`The Unicode for ${code} is ${unicodeResult}.`);
}

// 6th Task

let persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

for (let person of persons) {
  console.log(`${person.name} is ${person.age} years old`);
}

// 7th Task

let text = "Today is 2024-06-09 and it's a sunny day. Temperature is 25°C.";
let currentNumber = "";

for (let char of text) {
  if (!isNaN(parseInt(char))) {
    currentNumber += char;
  } else if (currentNumber !== "") {
    console.log(parseInt(currentNumber));
    currentNumber = "";
  }
}
if (currentNumber !== "") {
  console.log(parseInt(currentNumber));
}

// 8th Task

let formData = {
  username: "john_doe",
  password: "passwo",
  email: "johnexample.com",
  age: 101,
};

for (let key in formData) {
  if (key === "email") {
    if (!formData[key].includes("@")) {
      console.log("Email should contain '@'");
    }
  }
  if (key === "age") {
    if (typeof formData[key] !== "number" || formData[key] > 100) {
      console.log("Age should be a number and not greater than 100");
    }
  }

  if (key === "password") {
    if (formData[key].length < 8) {
      console.log("Password should be at least 8 characters long");
    }
  }
}