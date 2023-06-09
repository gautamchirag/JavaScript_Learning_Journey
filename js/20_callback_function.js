//Call back function
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function myfunc(Callback){
    console.log("hellow world insid func");
    Callback(2);
}
// myfucn([1,2,3,4]);

function myfunc2(name){
    console.log("siinde the func 2");
    console.log("youre namw is",name);
}
myfunc(myfunc2);


//Function returning function
// simaple return function
function a(){
    return "Lisa";
}
 ans = a();
console.log(ans);

function func3(){
    function hello(name){
        console.log("hello ",name);
        return 1;
    }
    return hello;
}
var ans = func3();
console.log(ans("karan"));