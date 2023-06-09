// prptotype - it is an object associated with function object  
function hello(){
    console.log("hello");
}

hello();

// javscript function is object also
// Name property which gives name 
console.log(hello.name)

// you can add your own property
hello.myProperty = "property Value";
console.log(hello.myProperty);

// function will give an empty object {} which called prototype
console.log(hello.prototype);
// only function prototype prooerty

if(hello.prototype){
    console.log("prototype is present ");
}
else{
    console.log("prototype is not present ");
}

// How to use prototype 
hello.prototype.abc = "abc";
hello.prototype.sing = function(){
    return  "lalala..";
}
console.log(hello.prototype);
console.log(hello.prototype.sing());