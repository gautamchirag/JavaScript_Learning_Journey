// Optional chaining

// we want to acces the house number 
const users = {
    firstName : "Chirah",
    address: {houseNumber:56}
}
// if there is no address so it will throw "users.address is undefined" can read the property of undefine 
console.log(users.address.houseNumber);

//solution
const users1 = {
    firstName : "Chirah",
    // /address: {houseNumber:56}
}
console.log(users1?.address?.houseNumber);
// users1?.address matlab agr user he to addres li value do nhi to undefine


