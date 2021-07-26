//   Find the culprits and nail them — debugging javascript loops
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string1 = "";
 
for (var i = 0; i < 11; i++) {
 new_string1 += numsArr[i];
}
console.log(new_string1);

// Output: 1234567891011

var new_string2 = numsArr[0];
for (var i = 1; i < 11; i++) {
  new_string2 += "," + numsArr[i];
 }
 console.log(new_string2.trim());
 
 // Output: 1,2,3,4,5,6,7,8,9,10,11


var new_string3 = "";
 
for (var i = 10; i >= 0; i-- ) {
 new_string3 += numsArr[i]+ " ";
}
console.log(new_string3.trim());

// Output: 11 10 9 8 7 6 5 4 3 2 1


