let str = ` Hello everyone this is my third homework `;

let charAtEx1 = str.charAt(0);
let charAtEx2 = str.charAt(6);
let charAtEx3 = str.charAt(15);

console.log(charAtEx1, charAtEx2, charAtEx3);

let charCodeAtEx1 = str.charCodeAt(2);
let charCodeAtEx2 = str.charCodeAt(17);
let charCodeAtEx3 = str.charCodeAt(23);

console.log(charCodeAtEx1, charCodeAtEx2, charCodeAtEx3);

let concatEx1 = str.concat(` you can review it here. `);
let concatEx2 = str.concat(` you can review it later. `);
let concatEx3 = str.concat(` you can review it now. `);

console.log(concatEx1, concatEx2, concatEx3);

let includesEx1 = str.includes(`Hello`);
let includesEx2 = str.includes(` `);
let includesEx3 = str.includes(`p`);
let includesEx4 = str.includes(`h`, 32);

console.log(includesEx1, includesEx2, includesEx3, includesEx4);

let endsWithEx1 = str.endsWith(`.`);
let endsWithEx2 = str.endsWith(`k`);
let endsWithEx3 = str.endsWith(` `);
let endsWithEx4 = str.endsWith(`h`, 33);

console.log(endsWithEx1, endsWithEx2, endsWithEx3, endsWithEx4);

let indexOfEx1 = str.indexOf(`Hello`);
let indexOfEx2 = str.indexOf(` `);
let indexOfEx3 = str.indexOf(`k`);
let indexOfEx4 = str.indexOf(`h`, 17);

console.log(indexOfEx1, indexOfEx2, indexOfEx3, indexOfEx4);

let lastIndexOfEx1 = str.lastIndexOf(`l`);
let lastIndexOfEx2 = str.lastIndexOf(` `);
let lastIndexOfEx3 = str.lastIndexOf(`o`);
let lastIndexOfEx4 = str.lastIndexOf(`h`, 39);

console.log(lastIndexOfEx1, lastIndexOfEx2, lastIndexOfEx3, lastIndexOfEx4);

let replaceEx1 = str.replace(`Hello`, `Hi`);
let replaceEx2 = str.replace(` `, ``);
let replaceEx3 = str.replace(`k`, `k.`);

console.log(replaceEx1, replaceEx2, replaceEx3);

let replaceAllEx1 = str.replaceAll(` `, ``);
let replaceAllEx2 = str.replaceAll(`o`, `0`);
let replaceAllEx3 = str.replaceAll(`h`, `h.`);

console.log(replaceAllEx1, replaceAllEx2, replaceAllEx3);

let sliceEx1 = str.slice(5, 14);
let sliceEx2 = str.slice(14, 26);
let sliceEx3 = str.slice(26, 32);

console.log(sliceEx1, sliceEx2, sliceEx3);

let splitEx1 = str.split(` `);
let splitEx2 = str.split(`o`);
let splitEx3 = str.split(`h`);
let splitEx4 = str.split(`h`, 20);

console.log(splitEx1, splitEx2, splitEx3, splitEx4);

let startsWithEx1 = str.startsWith(`Hello`);
let startsWithEx2 = str.startsWith(` `);
let startsWithEx3 = str.startsWith(``);
let startsWithEx4 = str.startsWith(`h`, 32);

console.log(startsWithEx1, startsWithEx2, startsWithEx3, startsWithEx4);

// Pretty much self-explanatory
let toLowerCaseEx1 = str.toLowerCase();

console.log(toLowerCaseEx1);

// Same thing as toLowerCaseEx1
let toUpperCaseEx1 = str.toUpperCase();

console.log(toUpperCaseEx1);

let trimEx1 = str.trim();
let trimEx2 = str.trimStart();
let trimEx3 = str.trimEnd();

console.log(trimEx1, trimEx2, trimEx3);

let repeatEx1 = str.repeat(`5`);

console.log(repeatEx1);

// Added them in the end becuase we didn't go over them but i thought they would be useful.
let substringEx1 = str.substring(0, 6);
let substringEx2 = str.substring(6, 0);
let substringEx3 = str.substring(0, 16);

console.log(substringEx1, substringEx2, substringEx3);



