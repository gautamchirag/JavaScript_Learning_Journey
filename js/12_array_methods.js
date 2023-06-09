// primitive vs refrence type
// primitive
     // let num1 = 6;
     // let num2 = num1;
     // console.log(num1+" "+num2);
     // num1++;
    // console.log(num1+" "+num2);
    // // refrence
    // let arr1 = ["item1","item2"];
    // let arr2 = arr1;
    // console.log(arr1, arr2);
    // arr1[0]="item3";
    // console.log(arr1,arr2);
    // let arr3 = [...arr1,...arr2];
    // console.log(arr3);

//How to copy array
//1. Using slice Method
    const arr4 = [1,2,3,4];
    const arr5 = arr4.slice(0);
    console.log(arr5);

//2. Using spread Oprataot "..."
    const arr6 = [...arr5, ...arr4];
    console.log(arr6);

//3. Using Concate method
    const arr7 = [].concat(arr6,arr4);
    console.log(arr7);

// ARRAY DESTURCTRING - it is process in which we distructue the array in diffrent forms
// Q.we want save the value in given array in diffrent variable
        const arr8 = [1,2,3,5,6];
        let [Myvar1, Myvar2] = arr8; // in this step we are saving the first two value of array in the variable Myvar1 and Myvar2
        // if we want save the vale of last elment in the variable it can be done as follws
        let [a, , , ,b] = arr8;// it will give a = 1 and b = 6
        console.log(Myvar1,Myvar2);
        console.log(a,b);//1,6
        // we can use these Variable as normal var


//LOOPS IN ARRAY
//1 for-of-lopp
        for(let arr of arr8){
            console.log(arr);// array will give the value of the array 
        }
//1 for-in-lopp
        for(let arr in arr8){
            console.log(arr8[arr]);// array will give the index of the array 
        }