// STRING INDEXING

let firstName = "Chirag Gautam";

// k    a   r   a   n
// 0    1   2   3   4

console.log(firstName[4]);
// length of string
console.log(firstName.length);


// IMPORTED FUNCTION 
// 1 trim()
let name = "    llkgjh";
console.log(name);
name = name.trim();
console.log(name);

// 2 toupperCase()
console.log(firstName.toUpperCase());
//3 to lowerCase()
console.log(firstName.toLowerCase());
// 4 slice(start , end) from start to before th rend
console.log(firstName.slice(0,2));


/// STRING CONCATINATION

let string1 = "Kishan";
let string2 = "chauhan";
let fullName = string1 + " " + string2;
console.log(fullName);

//TEMPLATE STRING