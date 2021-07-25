// Program to rotate an array by k times
var array1 = [1,2,3,4,5,6,7,8,9];
var array2 = [1,2,3,4,5,6,7,8,9];
var k = 5;


// Using Anonymous function
 var foo = function(arr,k){
     
        if (!arr.length) return arr;
        let index = -1;
        while (++index < k) {
            arr.unshift(arr.pop());
        }
        console.log(arr);
} 

foo(array1,k);


// Using IIFE method

(function(brr,k){
    if (!brr.length) return brr;
        let index = -1;
        while (++index < k) {
            brr.unshift(brr.pop());
        }
        console.log(brr);
})(array2,k);


// Output :- Array rotated k times