// new operator 
// 1) create empty object with this = {}
// 2) return the empty object
// 3) set the --proto-- to prototype of the function 

// constructor function 
function CraeteUser(firstName, lastname,email,age,address){
    this .firstName = firstName;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.address = address;
}

// setting up prptotype 
CraeteUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CraeteUser.prototype.is18 =  function(){
    return this.age>=18;
}
CraeteUser.prototype.sing = function(){
    return "lala lala ...";
}


const user1 = new CraeteUser("Chirag","Gautam","cg@gmail.com",23,"b - 10/20 swarop Nagar");
const user2 = new CraeteUser("karan","chauhan","kc@gmail.com",21,"b - 10/20 swarop Nagar");
const user3 = new CraeteUser("ankit","chauhan","kc@gmail.com",12,"b - 10/20 swarop Nagar");
console.log(user1)
console.log(user1.__proto__); // = prototype of craeteUser
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

