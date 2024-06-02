// 1st Exercise
function calculateFahrenheit(celsius) {
  return Math.floor((fahrenheit = (celsius * 9) / 5 + 32));
}

const celsius = 26;
let temperature = calculateFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${temperature}°F.`);

// 2nd Exercise
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return `The number ${num1} is bigger than the number ${num2}.`;
  } else if (num1 < num2) {
    return `The number ${num2} is bigger than the number ${num1}.`;
  } else {
    return `Both numbers are equal`;
  }
}

let num1 = 56;
let num2 = 126;
let result = compareNumbers(num1, num2);
console.log(result);

// 3rd Exercise
function repeatString(str, times) {
  return str.repeat(times);
}

let str = `Hello Everyone `;
let times = 3;
let repeatResult = repeatString(str, times);
console.log(`The message ${repeatResult} repeats ${times} times.`);

// 4th Exercise
function startsWithPrefix(string, prefix) {
  return string.startsWith(prefix);
}

let string = `Beautiful World`;
let prefix = `Beautiful`;
let prefixResult = startsWithPrefix(string, prefix);
console.log(prefixResult);

// 5th Exercise
function greetingMessage(hour) {
  if (hour < 0 || hour > 24) {
    return "Invalid hour!";
  } else if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}

const hour = 2;
const greetingResult = greetingMessage(hour);
console.log(greetingResult);
