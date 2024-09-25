// DataTypes in JS (Primitive and Non-Primitive)

// Primitive Data Types

// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null

const sentence = "Hello guys welcome back";

const age = 17;
const myPercentage = 99.68;

// console.log(typeof age);

const isSkyBlue = true;
const isRaining = false;

console.log(isSkyBlue);
console.log(isRaining);

const canVote = age >= 18;

console.log(canVote);

if (canVote) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

let name;
console.log(name);

let city = null;
console.log(city);

// boolean

// Non-Primitive Data Types

// 1. Array

const myHobby = ["football", "coding", "watching", "singing"];

console.log(myHobby[myHobby.length - 2]);

// 2. Object

const myDetails = {
  name: "Santhosh",
  age: 21,
  city: ["Chennai", "Mumbai"],
};

// console.log(myDetails.city[myDetails.city.length - 1]);

// 3. Function

function greeting() {
  console.log("Hello World");
}

const myDetails1 = [
  {
    name: "test",
  },
  {
    name: "test",
  },
];
