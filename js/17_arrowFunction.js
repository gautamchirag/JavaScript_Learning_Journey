// Arraow function
// Declartion
const singHappyBirthday =()=>{
    console.log("happy birthday to you");
}
singHappyBirthday();

// adds 3 numbers
const sum = (a,b,c)=>{
    return a+b+c;
}
let ans = sum(1,2,4)
console.log(ans);

// isEven
const isEven = numbers =>{
    return numbers%2===0?true:false;
}
console.log(isEven(8));//true
// is oddd
const isOdd = numbers => numbers%2!==0?true:false;
console.log(isOdd(7));