// Important method in array
// forEach method takes a callback function
const numbers =[1,2,3,4,5];
// function print(number,index){
//     console.log("index is",index);
//     console.log(`${number}*2 = ${number*2}`);
// }
print(numbers[0],0);
// do this with evrey element using for loop
        // for(let i =0;i<numbers.length;i++){
        //     print(numbers[i],i);
        // }

numbers.forEach(function(number,i){
    console.log("index is",i);
    console.log(`${number}*2 = ${number*2}`);
});

const users =[
    {firstName: "Karan",age: 23},
    {firstName: "lisa", age: 21},
    {firstName: "Monika",age: 32},
    {firstName: "ankit",age: 24}
]


users.forEach(function(user){
    console.log(user.firstName);
})



