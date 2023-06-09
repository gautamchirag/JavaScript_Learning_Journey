// new keyword
// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function
function craeteUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
const user1 = new craeteUser("Chirag",34);
console.log(user1);
// new keyword 
// 1) create empty object with this = {}
// 2) return the empty object
// 3) set the --proto-- to prototype of the function 

// [[prototype]] = protoype of createUser
craeteUser.prototype.about =function(){
    return `hi ${this.firstName}`;
}

console.log(user1.about())