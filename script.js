let priceTag = `33.33`;

let priceNumber = Number(priceTag);

let changePriceTag = (priceTag * 5).toFixed(2);

console.log(changePriceTag);

let randomNumber = Math.random();

randomNumber = randomNumber * 1000000;

let flooredNumber = Math.floor(randomNumber);

console.log(flooredNumber);

let ceiledNumber = Math.ceil(randomNumber);

console.log(ceiledNumber);

let roundNumber = Math.round(randomNumber);

console.log(roundNumber);

let truncatedNumber = Math.trunc(randomNumber);

console.log(truncatedNumber);

let distanceStr = `5.75`;

let timeStr = `45m`;

let distanceToNumber = Number(distanceStr);

let timeToNumber = parseInt(timeStr);

let totalSpeed = distanceToNumber / (timeToNumber / 60);

let roundedSpeed = totalSpeed.toFixed(2);

console.log(
  `The marathone runner ran ${distanceToNumber} kilometers in ${timeToNumber} minutes, with a speed of ${roundedSpeed} km/h.`
);

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let randomColor = `rgb(${red}, ${green}, ${blue})`;

console.log(randomColor);

let phoneNumber = "(123)456-7890";

let areaCode = Number(phoneNumber.substring(1, 4));

let remainingDigits = Number(
  phoneNumber.substring(5, 8) + phoneNumber.substring(9)
);

console.log("Area Code is:", areaCode);
console.log("Remaining Digits are:", remainingDigits);
