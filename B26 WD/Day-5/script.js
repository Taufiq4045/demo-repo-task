// Program to remove the duplicates from an array
var array = [1,2,3,4,5,2,3,1,10,47,13]


// Using Anonymous function
var foo = function(arr){
           
    let uniqueArr = []; 
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
} 

foo(array);

// Using IIFE method

(function(arr){
    let uniqueArr = []; 
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
})(array);

// Output :- Array after removing duplicates