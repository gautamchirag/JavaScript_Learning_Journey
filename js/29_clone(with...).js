// Clone using ... operator 
const obj1 ={
    firstName : "Chirag",
    age: 21
}
const obj2 = {...obj1};
obj1.gender = "male";
console.log(obj1) ;
console.log(obj2) ;


//Clone using object.assign

const obj3={
    firstName : "Karan",
    age: 21
}
const obj4 =Object.assign({},obj3);
obj3.gender = "male";
console.log(obj4,obj3) ;
