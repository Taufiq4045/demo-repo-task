// Find the culprit and nail them - JS debugging functions 

let n = "123";

console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=parseInt(n[i]);
 }
 return sum;
}
 // Output :- Sum of the digits
 
