// OBJECTS
// SOME IMPORTANT POINT
// 1 array are good but note sufficent for the real world problems
// 2 Objct don't have the index
// 3 Object have key value pair 
// 4 one key can be used only once

// How to create an Objct
// typeOfTheObject Name ={key:value,key2,value2}
     
        let person = {
            name: "Chirag",
            age: 29,
            hobbies : ['hooby1','hobby2']
        }

        console.log(person,typeof(person));


// How to Acces the dat of the objects

// method 1  - Using Dot Notation
        console.log(person.name);

// Method 2  - Using the Bracket Notaion
        console.log(person["hobbies"]);


// How to add key value pair
        person.gender = "male";// dot
        person["height"]= "6 feet"// bracket
        console.log(person);


// Differnce between dot and the baracket notation
// // 1 let suppose we want to send the value of varibale as the key for the object 
// // In barcket 
        var myvar = "family members";
        person[myvar]="6";// here the value of my var is string so a new key will bw created for that value
        console.log(person);

// // In dot 
        var key1 = "brothes";
        person.key1 = "3"; // here a new key will be created with the same name key not brothers
        console.log(person);


// // How to Itrate the Ojects


// //1 Using for- in -loop
        for(let key in person){
            console.log(key,person[key]);
            
        }
// //2 Using Object.key
        console.log(Object.keys(person));
// // for - of - loop 
        for ( let key of Object.keys(person)){
            console.log(key,":",person[key]);

        }


//Comment above part


// COMPUTDED PROPERTIES - -we want to use computed value of the variable as the key and value pair

        const key1 = "objectk1";
        const key2 = "object2";

        const value1 = "value1";
        const value2 = "value2";
// make this object using those variable
// Object { objectk1: "value1", object2: "value2" } 


        const obj = {
            [key1]: value1,
            [key2]: value2 // it we use key1 = "Object1" and key2 = "object2" same for values
        }
        console.log(obj);

 
// Comment above code 


// Spread Operator// copy 
        const newArray = [..."abcdef"];
        console.log(newArray);//[ "a", "b", "c", "d", "e", "f" ]

        const obj1 = {
            key1: "value1",
            key2: "value2 "
        }
        const obj2 = {
            key1:"valueUnique",
            key3:" value3",
            key4: "value4" 
        }
        // const obj = {...obj1,...obj2, key5: " value"}// it will clone the obj1 and obj2
        // // object2 key1 will overeide the value of object1 key1;
        // console.log(obj);

// Spreading string in a object 
        const obj3 = {..."abcdf"};
        console.log(obj3); //  obj3{0: "a", 1: "b", 2: "c", 3: "d", 4: "f" }
        const obj4 = {...[1,2,3,45,6],..."abcdf"};
        console.log(obj4);// Object { 0: "a", 1: "b", 2: "c", 3: "d", 4: "f" }

