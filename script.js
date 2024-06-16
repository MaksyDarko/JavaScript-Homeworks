// Task 1

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

const mergeArrays = (array1, array2) => {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
};

mergeArrays(array1, array2);
console.log(`The combined Array is:`, array1);

// Task 2

let tasks = ["Study", "Exercise", "Read", "Write", "Code"];

let removedTask = tasks.pop();
console.log(`The removed task is:`, removedTask);

let newTasks = tasks.unshift(`Yoga`, `Daily Walk`, `Meditaion`);
console.log(`The task list after we added some new tasks:`, tasks);

let newTaskArray = tasks.slice(0, 3);
console.log(`The first 3 tasks are:`, newTaskArray);

// Task 3

let people = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 35 },
];

const findPersonByName = (people, firstName) =>
  people.find((person) => person.name === firstName) ||
  `Person with the name ${firstName} not found.`;

console.log(findPersonByName(people, `Bob`));
console.log(findPersonByName(people, `Filip`));
