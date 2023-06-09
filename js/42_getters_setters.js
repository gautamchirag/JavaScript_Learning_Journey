// getters and setters
class Person{
    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    get Age(){// acting as property // getter
        return this.age;
    }
}

const Person1 = new Person("Chirag","Gautam",21);
console.log(Person1.fullName());

// print the age without () 
console.log(Person1.Age);