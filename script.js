let outsideTemperature = 26;

if (outsideTemperature <= 0) {
  console.log("It's freezing outside!");
} else if (outsideTemperature > 0 && outsideTemperature <= 15) {
  console.log("It's cold outside!");
} else if (outsideTemperature > 16 && outsideTemperature <= 25) {
  console.log("It's warm outside!");
} else {
  console.log("It's hot outside!");
}

let ageStatus = 60;

if (ageStatus >= 0 && ageStatus < 2) {
  console.log("Infant");
} else if (ageStatus >= 3 && ageStatus <= 12) {
  console.log("Child");
} else if (ageStatus >= 13 && ageStatus <= 19) {
  console.log("Teenager");
} else if (ageStatus >= 20 && ageStatus <= 59) {
  console.log("Adult");
} else {
  console.log("Senior");
}

let number = 122;
let result = number % 2 === 0 ? "Number is even" : "Number is odd";
console.log(result);
