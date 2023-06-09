// const userMethod = {
//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18(){
//         return this.age>=18;
//     },
//     sing(){
//         return "kah rha hu" 
//     }
// }
// Q  we want to creat million user 
// 1 function(that create object)
// 2 add key value in object
// 3 return object

function craeteUser(firstName, lastname,email,age,address){
    const user =Object.create(craeteUser.prototype)
    user.firstName = firstName;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}


craeteUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
craeteUser.prototype.is18 =  function(){
    return this.age>=18;
}
craeteUser.prototype.sing = function(){
    return "lala lala ...";
}

// checking for prototype
console.log(craeteUser.prototype);

const user1 = craeteUser("kishan","chauhan","kc@gmail.com",23,"b - 10/20 swarop Nagar");
const user2 = craeteUser("karan","chauhan","kc@gmail.com",21,"b - 10/20 swarop Nagar");
const user3 = craeteUser("ankit","chauhan","kc@gmail.com",12,"b - 10/20 swarop Nagar");
console.log(user1)
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

