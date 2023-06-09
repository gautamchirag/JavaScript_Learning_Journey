"use strict";
// Method -> function inside object
// this is the parent that is callng the method 
function personInfo(){
    console.log(this);
    console.log(`my name is ${this?.firstName} person age is ${this?.age}`)
}
const  person1 = {
    firstName : "Chirag",
    age: 21,
    about:personInfo
}
const  person2 = {
    firstName : "Nitesh",
    age: 21,
    about:personInfo
}

person1.about();
person2.about();

console.log(this);//Window object
console.log(window);//Window object