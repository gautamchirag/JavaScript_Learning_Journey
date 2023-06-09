// iterables - we can apply for of loop 
//eg string , array
const name = "Chirag";
for(let char of name){
    console.log(char);
}

//Array like object ->jinke pass length property he can we can acces by the index
//eg sting
console.log(name.length);
console.log(name[0]);


// Sets 
//it is an itrable 
//store data with differnt type
//sets also have its on methods
//no index based access
//order is no guaranteed
// unique items only
const items = [1,23,6]
const numbers = new Set([12,34,54,65]);
numbers.add(1);
numbers.add(2);
// numbers.add([1,23]);// have different memory location
// numbers.add([1,23]);
// checking element is prsent 
if(numbers.has(1)){
    console.log("1 is present ")
}
for(let number of numbers){
    console.log(number);
}
console.log(numbers);
