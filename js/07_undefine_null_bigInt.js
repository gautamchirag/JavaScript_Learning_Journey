// UNDEFINE = NO value is not assign;
let firstName;
console.log(typeof(firstName));
var lastName;
console.log(typeof(lastName),firstName);
// but with const we have to assign the value(const a;)
const a =10;
console.log(a);



// NULL
let myVar = null;
console.log(myVar);//null
console.log(typeof(myVar));//we get object which is a bug of js it is actualy null



//BigInt
let number = 123;
console.log(number);
console.log(Number.MAX_SAFE_INTEGER);
// syntax
let newNumber = BigInt(267659876020667060684597662616856);
console.log(newNumber);