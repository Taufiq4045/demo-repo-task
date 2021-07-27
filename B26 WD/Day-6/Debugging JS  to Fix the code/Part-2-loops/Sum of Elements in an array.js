// Find the culprit and nail them - JS debugging loops 

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;

for (var i = 0; i <=10; i++) {
  sum += parseInt(numsArr[i]);
}
console.log(sum);

 // Output :- Sum of all elements in an array
 
