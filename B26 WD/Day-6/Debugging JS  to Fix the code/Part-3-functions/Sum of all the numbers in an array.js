// Find the culprit and nail them - JS debugging functions 

const arr = [9,8,5,6,4,3,2,1];

(function(arr) {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 })(arr);

 // Output :- Sum of all the numbers
 
