// some method tkake callback  gives true or false
const numbers = [3,8,9];
// kya ak bi number he jo even 
const ans = numbers.some((number)=>number%2===0);
console.log(ans);

// real life eg check if user with user name monika
const users =[
    {firstName: "Chirag",age: 23,userId:1},
    {firstName: "lisa", age: 21,userId:2},
    {firstName: "Monika",age: 32,userId:3},
    {firstName: "ankit",age: 24,userId:4}
];

console.log(users.some((user)=>user.firstName === "Monika"));

// fill item - fill all  the elemnt with a number 
 const newArray = new Array(10).fill(0);
 console.log(newArray);
 // fille the array with 10 from the postion 4,8
 newArray.fill(10,3,8);
 console.log(newArray);

 // splice(start,no of deletion,insert) method - to insert and insert in array
 // delete
 const myArray = ['item1',"item2","item3"];
 myArray.splice(1,2);// gives array of deletd item
 console.log(myArray);
 //instert
 myArray.splice(1,0,"insertedItem");
 console.log(myArray);

 // insret deleet
 myArray.splice(1,2,"insert1","insered2");
 console.log(myArray);
 

