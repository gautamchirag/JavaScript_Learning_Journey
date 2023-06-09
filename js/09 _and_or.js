// conditonal operator 
// 1 if else;
let age = 10;
if(age>18){
    console.log("you can access");
}
else if(age<18){
    console.log("sorry");
} 

// ternary operator


// && operator
 let firstName = "Krishna";
 let age1 = 10;

 if(firstName[0]==='K'){
    console.log("first latter is K")
 }

 if(age1>18){
    console.log("you are 18+");
 }

 // combine those statement in one

 if(firstName[0]=='K' && age1>18){
    console.log("first latter is k and 18+")
 }
 else{
    console.log("false and")
 }


 // || or operator
// it will work if any one constion i true
if(firstName[0]=='K' || age1>18){
    console.log("first latter is k and 18+")
 }