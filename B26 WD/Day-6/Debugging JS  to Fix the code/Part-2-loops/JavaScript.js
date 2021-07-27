//   Find the culprits and nail them — debugging javascript loops
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

var Ele = "";
for (var i = 0; i < numsArr.length; i++) {
 var str = numsArr[i];
 for(let j=0; j < str.length; j++){
        Ele += str[j]+"";
 }
}

console.log(sum);
// Output :- Elements in an inner array