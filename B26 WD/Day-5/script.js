// JS to Print sum of all numbers in an array
var array = [1,2,3,4,5,6,7,8,9,10];


//Using Anonymous Function
var foo = function(arr) {
    let total = 0;
	for (let i in arr) {
      total += arr[i];
    }
  console.log(total);
  }

foo(array);

//Using meathod IIFE

(function(arr) {
	let total = 0;
	for (let i in arr) {
      total += arr[i];
    }
  console.log(total);
})(array);

// Output :- Sum of all numbers in an array