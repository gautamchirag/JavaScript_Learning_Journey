
// arrow function 
const user1 = {
    firstName : "Chirag",
    age : 8,
    about : ()=>{
        console.log(this)
        console.log(this.firstName,this.age);
    }

}
// arraow function takes this from srounding
// in this case this = window // ak level up
user1.about();

// we can note change the value this in arraow function
user1.about.call(user1);


/// IMPORTANT 
// Creat methode for the object

const obj1 = {
    key1 : "vlaue1",
    key2 : "vlaue2"
}

// we want to make object in which we can acces the object 1 without saving the value in object 2

const obj2 = Object.create(obj1);
console.log(obj2);//Object {  } 
console.log(obj2.key1);// value 1
// this happning due to --proto-- or [[prototype]] it is creating a chain b/w obj1 and obj2