// Hoisting
pritHello();// hello

function pritHello(){
    console.log("hello");
}

// but this will not work in the function expresion or arraow fun
// let pritHello = function(){
//     console.log("hello");//Uncaught ReferenceError: can't access lexical declaration 'pritHello' before initialization
//     //<anonymous> 
// }


// function inside function
        const app = ()=>{
            const myFunc=()=>{
                console.log("hi guys");
            }
            const add =(a,b)=>{
                return a+b;
            }
            console.log("inside app")
            myFunc();
            console.log(add(3,7));
        }
    // we can call the function only that function only 
    app();

// Lexical scope
// first it will check if the function is in it or not if not
// it will seaarch in the lexical envirnment like my app is the lexical
        const myvar = "value1"
        function myApp(){
            
            function myfunc3(){
                // const myvar ="value59"
                console.log("insside myfunc3",myvar);
            }
            const myfunc1 = function(){

            }
            const myfunc2 =()=>{}
            console.log(myvar);
            myfunc3();

        }
        myApp();

//Scope

//let and const are block scope
//var is a function scope
// block scope-can be accesd in the that  paerticuler block 
{
    // block
    let firstName ='karan'
    console.log(firstName);
}
// console.log(firstName);//ReferenceError: firstName is not defined
let firstName = "kishan";
console.log(firstName);

//function block-can be accessed from anywherer
{
    var lastName= "chauhan"
    console.log(lastName);
}
{
    var lastName= "rathor"
    console.log(lastName);
}
console.log(lastName);//last updated value

if(true){
    let firstName ="harshit"
    console.log(firstName);
}