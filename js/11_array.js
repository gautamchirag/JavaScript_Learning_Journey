// craetion of arrays;
let fruits = ["apple","mango","grape"];
let mixed = [1,2,3,"hello",null, undefined];
console.log(fruits[2]);
console.log(mixed);

fruits[1]= "banana";
console.log(fruits);

console.log(typeof(fruits));
console.log(Array.isArray(fruits));

// array operation
fruits.push("mango");
console.log(fruits);

let last =fruits.pop();
console.log(fruits, last);

// add at the starting 
fruits.unshift("mango");
console.log(fruits);
// remove at the starting
fruits.shift();
console.log(fruits);