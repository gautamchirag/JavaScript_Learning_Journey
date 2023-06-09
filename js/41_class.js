// Class 
class CraeteUser{
    constructor(firstName, lastname,email,age,address){
        console.log("constructor called")
        this .firstName = firstName;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    is18(){
        return this.age>=18;
    }
    sing(){
        return "lala lala ...";
    }

}

const user1 = new CraeteUser("Chirag","Gautam","kc@gmail.com",23,"b - 10/20 swarop Nagar");
const user2 = new CraeteUser("karan","chauhan","kc@gmail.com",21,"b - 10/20 swarop Nagar");
const user3 = new CraeteUser("ankit","chauhan","kc@gmail.com",12,"b - 10/20 swarop Nagar");

console.log(user2.about(),user2.is18());
console.log(Object.getPrototypeOf(user2));

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(food){
        return `${this.name} is eating ${food}`
    }
}

const animal1 = new Animal("Dog", 10);
const animal2 = new Animal("Cat", 5);
const animal3 = new Animal("Horse", 23);

console.log(animal1.eat("biscket"));

// inheritence
 // sub class
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is runing at ${this.speed}`;
    }
    eat(){
        return "modifyied eat";
    }
}

const dog1 = new Dog("tommy",12,45);
console.log(dog1.eat("meat"));
console.log(dog1.run());