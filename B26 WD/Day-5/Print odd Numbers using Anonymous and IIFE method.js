// JS to Print Odd Numbers in an array
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17];

//Using Anonymous Function
var foo = function(arr){
    
    let odds = arr.filter(n => n%2);
    console.log(odds);
}

foo(arr);

//Using meathod IIFE

(function(array){
    let odds = arr.filter(n => n%2);
    console.log(odds);
})(arr);

// Output :- Odd Numbers.
