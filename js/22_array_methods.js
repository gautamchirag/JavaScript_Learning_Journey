// map method ->takes a callback as an input
// map function will make an array of retuerned values // if no value retunred undfined array will be made 
const numbers = [1,2,3,4,5,6];

// callabck function
const square = function(number){
   return (number*number) ;
}

const squareNumberss = numbers.map(square);
console.log(squareNumberss);

// real lif example
const users =[
    {firstName: "Chirag",age: 23},
    {firstName: "lisa", age: 21},
    {firstName: "Monika",age: 32},
    {firstName: "ankit",age: 24}
]

const userNames = users.map((user)=>{
    return user.firstName;

})
console.log(userNames);

//filter method uses callback function always returns true or false value-array 
// filter odd numbers
const evenNumber= numbers.filter((number)=>{
    return number%2===0?true:false;

})
console.log(evenNumber);


//Reduce method--take an input as callback ->give single valued in return
//Aimm -> sum of all the numbers in array
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;

},100)//intial value of accumulator
console.log(sum);

// accumulator         currentValue        return
//     1                   2                   3
//     3                   3                   6
//     6                   4                   10
//     10                  5                   15
//     15                  6                   21//then return 21

// real life eg
const userCart = [
    {productId : 1, productName: "cabels",price:100},
    {productId : 2, productName: "pc",price:50000},
    {productId : 2, productName: "tv",price:15000}
]

const totalPrice = userCart.reduce((totalPrice,currentPoduct)=>{
    return currentPoduct.price + totalPrice;
},0)
console.log(totalPrice);





