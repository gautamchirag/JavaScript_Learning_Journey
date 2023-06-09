
// oject literal
// import note
// the key in object must be string or symbol only
const  person1 = {
    firstName : "Chirag",
    age: 21,
    1:"one" // the one is here is in string 

}

// Maps
// Maps is an iterable
// key = any type of varible
// orderd
// no duplicate key 
// stores key value pair
const person2 = new Map();
person2.set("firstName","lisa");
person2.set("age",7);
person2.set(1,"one");
// get method
console.log(person2.get("firstName"),person2.get(1));
// get keys 
console.log(person2.keys());
// print all key
for(let key of person2.keys()){
    console.log(key);
}
// map is iterable
for(let key of person2){
    console.log(key,typeof(key),Array.isArray(key));// key is array
}
// desutrctring 
for(let [key, value] of person2){
    console.log(key,value);// frstName Lisa i
}

console.log(person2);
const person3 = new Map([["name","karan"],["age",21]]);
console.log(person3)


// real life example
