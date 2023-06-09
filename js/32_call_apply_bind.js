// "use strict";
// Call apply and Bind 

// call(who is calling ,arguments )
// The call() method calls the function with a given this value and arguments provided individually.
const user1 = {
    firstName : "Chirag",
    age : 8,
    about : function(hooby , favMusician){
        console.log(this.firstName,this.age,hooby,favMusician);
    }

}

const user2 = {
    firstName : "Lisa",
    age: 9 
} 
user1.about();// karan 8
user1.about.call(user2,"guitar","arijit");// Lisa 9
user1.about.call(null,"guitar","arijit");// this is undefine

// This function is almost identical to apply(), except that call() accepts an argument list, while apply() accepts a single array of arguments — for example, func.apply(this, ['eat', 'bananas']) vs. func.call(this, 'eat', 'bananas').


//The apply() method calls the specified function with a given this value, and arguments provided as an array
//apply(this, [list of arguments])
user1.about.apply(user2,["flute","kk"]);

// bind - return function with this and cargument
const func = user1.about.bind(user2,"tabla","lisa");
func();
