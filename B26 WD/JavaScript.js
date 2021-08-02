var arr = [4,2,3,4,2];
var n = 5;

var sum = 0;
for(let i=0; i <n; i++){
   
    sum += arr[i];
}
var lsum = 0;
for(let i=0; i< n; i++){
    

    lsum += arr[i];
  
    var rsum = sum - lsum;

    if(lsum*(n-i-1) === rsum*(i+1)){
      console.log("yes");
       break;
    }
 }
