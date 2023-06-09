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


const user1 = new CraeteUser("kishan","chauhan","kcss@gmail.com",23,"b - 10/20 swarop Nagar");
const user2 = new CraeteUser("karan","chauhan","kcsss@gmail.com",21,"b - 10/20 swarop Nagar");
const user3 = new CraeteUser("ankit","chauhan","kcsk@gmail.com",12,"b - 10/20 swarop Nagar");
// we want to print only user 1 keys 
 for (let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
 }

