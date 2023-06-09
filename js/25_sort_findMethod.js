// sort method
const numbers = [1100,400,200,135,6];
numbers.sort(); // sorting as a string 
console.log(numbers);// [ 1100, 135, 200, 400, 6 ]
//advantanges eg
const name = ["Chirag","kishan","lisa","Karam"];
console.log(name.sort());

// solution for the problem 
console.log(numbers.sort((a,b)=>{
    return a-b;// gives the differnce of asscai values 
    // if differnce is +ive saved as a,b else b,a
}))

// real life example 
const products = [
    {productId : 1, productName: "cabels",price:300},
    {productId : 2, productName: "pc",price:50000},
    {productId : 3, productName: "tv",price:15000},
    {productId : 4, productName: "charger",price:6000},
    {productId : 5, productName: "heater",price:1000}
]

const lowToHight = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})

console.log(lowToHight);

// Find method - it takes a callback function
// callbacak
const myArray = ["hafkj",'haiuh',"agk","ajll"];
function isLenght3(string){
    return string.length ===6;
}

console.log(myArray.find(isLenght3));// gives the first ans 

// rael life exanple 
const users =[
    {firstName: "Karan",age: 23,userId:1},
    {firstName: "lisa", age: 21,userId:2},
    {firstName: "Monika",age: 32,userId:3},
    {firstName: "ankit",age: 24,userId:4}
]

const thirdUser = users.find((user)=>user.userId ===3
);
console.log(thirdUser.firstName);


// Every method - checks for the all elements
// cheack if all the elemes are even
const ans = numbers.every((number)=>{
    return number%2===0;
});
console.log(ans);

// real lide example // use previus procduct array
const ans2 = products.every((product)=> product.price>500);
console.log(ans2);
