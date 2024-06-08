// 1st Task

let userType = `Viewer`;

switch (userType) {
  case `Admin`:
    console.log(`Welcome ${userType} you have full access.`);
    break;

  case `Editor`:
    console.log(`Welcome ${userType} you can edit content.`);
    break;

  case `Viewer`:
    console.log(`Welcome ${userType} you can view content.`);
    break;

  default:
    console.log(`Sorry your role is not recognized`);
}

// 2nd Task

let operatingSystem = `Linuxs`;

switch (operatingSystem) {
  case `Windows`:
    console.log(`Welcome user your operating system is: ${operatingSystem}`);
    break;

  case `MacOs`:
    console.log(`Welcome user your operating system is: ${operatingSystem}`);
    break;

  case `Linux`:
    console.log(`Welcome user your operating system is: ${operatingSystem}`);
    break;

  default:
    console.log(`${operatingSystem} Operating system is not recognized. `);
}

// 3rd Task

for (let i = 1; i < 100; i += 2) {
    console.log(i)
}

// 4th Task

let fruitArray = ["apple", "banana", "cherry", "orange"];

for (let i = 0; i < fruitArray.length; i++) {
  let upperCaseFruit = fruitArray[i].toUpperCase();
  let charCount = fruitArray[i].length;
  console.log(`The fruit ${upperCaseFruit} has ${charCount} characters`);
}

// 5th Task

let whiteSpaceArray = [`  us er44444  `, `user2 23  `, `userna me12334  `];

for(let i = 0; i < whiteSpaceArray.length; i ++) {
  let replaceArray = whiteSpaceArray[i].replaceAll(` `, ``);
  console.log(`The username ${whiteSpaceArray[i]} had white spaces and is fixed to ${replaceArray}.`)
}