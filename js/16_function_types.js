// Function Declaration
function singHappyBirthday(){
    console.log("happy birthday to you");
    return 1;
}

console.log(singHappyBirthday());

//perametric function
    function sum(a,b){
        console.log(a+b);
        return a+b;
    }

    console.log(sum(4,5));// returns the value 9
    function sum3Numbers(a,b,c){
        return a+b+c;
    }
    console.log(sum3Numbers(1,2));//NaN

    // odd and  even
    function isEven(n){
        return n%2===0?true:false;
    }
    console.log(isEven(4));
    function isodd(n){
        return n%2!==0?true:false;
    }
    console.log(isodd(4));

    // find a number in array
    // Input -- array and the target value
    // Output -- the index value
    function find(array,target){
        for(let i  in array){
            if(array[i]===target) return i ;
        }
        return false;
    }
    const num =[1,2,3,4]
    console.log(find(num,7));

// function Expression-assign the function to a variable
        const pritHello = function(){
            return "hello";
        }
        console.log(pritHello());