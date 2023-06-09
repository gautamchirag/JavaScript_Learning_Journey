//Default perameter
function addTwo(a,b){
    // it will set the default value of b =1 whan no argument is passed
    if(typeof b === "undefined"){
        b =1;
    }
    return a+b;
}
const ans = addTwo(3);
console.log(ans);

//method two
function sub(a,b=0){
    return a-b;
}
const ans1 = sub(7);
console.log(ans1);

//Rest pera meter - tao get the array of rets argument
function myfunc(a,b,c,...d){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`d is an array with values ${d}`);
    console.log(d);// it will give the rets of perameter as an array
}
myfunc(1,2,3,4,5,6);

function addAll(...all){
    //.all is the the array with all argument
    let ans = 0;
    for(let num of all ){
        ans+=num;
    }
    console.log(ans);
}
addAll(1,2,3,4,5,6,7,8);

// Parameter destructuring 
// object react use
const person ={
    firstName:"karan",
    gender: "male"
}

// function getDelails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// getDelails(person);
function getDelails({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}
getDelails(person);