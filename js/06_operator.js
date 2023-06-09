"using strict";
// TYPR OF OPERATORS


// DATA TYPES
// (Primitive data type)
// 1 string "harsit"
// 2 number 1,2,5
// 3 bolleans 
// 4 undefined
// 5 null
// 6 BigInt
// 7 Symble

let age = 22;
let name = "Chirag Gautam";
let key = "12345"
console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(key))

// Conver string to number
key = +key;
console.log(typeof(key));

//Conver number to string
age  = age + "";
console.log(typeof(age));

// Another way 
key = String(key);
age = Number(age);
console.log(typeof(key), typeof(age));