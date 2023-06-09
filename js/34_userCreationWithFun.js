const users = {
    // firstName : "Chirag",
    // lastname: "Gautam",
    // email : "cg83@gmail.com",
    // age : 21,
    address : "House no 123, coloney, pincde, state",
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18(){
        return this.age>=18;
    },
    sing(){
        return "kah rha hu" 
    }
}
// Q  we want to creat million user 
// 1 function(that create object)
// 2 add key value in object
// 3 return object

function craeteUser(firstName, lastname,email,age,address){
    const user = {}
    user.firstName = firstName;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = users.about;
    user.is18 = users.is18;
    user.sing = users.sing;
    return user;
}

const user1 = craeteUser("Chirag","Gautam","kc@gmail.com",23,"b - 10/20 swarop Nagar");
const user2 = craeteUser("karan","chauhan","kc@gmail.com",21,"b - 10/20 swarop Nagar");
const user3 = craeteUser("ankit","chauhan","kc@gmail.com",12,"b - 10/20 swarop Nagar");
console.log(user1.is18());
console.log(user1.sing());

