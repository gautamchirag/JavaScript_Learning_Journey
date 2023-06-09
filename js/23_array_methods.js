// Write a progaram that takes an input of numbers of length N and number 'p' position greater than zero and less than N and a number 'd' direction - either left or right.
// Objective is to return the array shifted by 'p' poastion in d dierction
const numbers = [1,3,2,7,4,6];
const shifLeft=(array)=>{
    let last = array[0];
    for(let i =0 ; i<array.length-1 ; i++){
        array[i]=array[i+1];
    }
    array[array.length-1] = last;
}
const shifRigth=(array)=>{
    let first = array[array.length-1];
    for(let i = array.length-1; i>0 ; i--){
        array[i]=array[i-1];
    }
    array[0] = first;
}// Method by shifting the element one by one
const  shiftMethod1 = (array,p,d)=>{
    if(d===0){
        while(p>0){
            shifLeft(array);
            p--;
        }
        
    }
    else if(d===1){
        while(p>0){
            shifRigth(array);
            p--;
        }
        
    }
    return array;
}

console.log(shiftMethod1(numbers,3,0));

// // Method second using spread operator to create new array
// const arr = [1,3,2,7,4,6];
// const shiftMethod2 =(array,p,d)=>{
//     const [...arrRight] = array.splice(p);
//     const [...arrLeft] = array.splice(0,p);
//     if(!d){
//         return arrRight.concat(arrLeft);
//     }
//     else if(d){
//         return arrRight.concat(arrLeft)
//     }
// }
// console.log(shiftMethod2(arr,3,1));