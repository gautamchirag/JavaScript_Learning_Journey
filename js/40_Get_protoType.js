let numbers = [1,2,3];
console.log(numbers);
Object.getPrototypeOf(numbers)// give object with all functions
// all the function of array are saved in prototype
// in the back JS call  constructor Array using new oprator in which all the function are saved in prototype object 
let numbers1 = new Array(1,2,3);
console.log(Array.prototype)

