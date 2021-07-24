// JS to Print all the Palindromes in an array
 var array = [121,5,171,1,13,11,152,1551,9];

 function isPalindrome(N)
 {
     let str = "" + N;
     let len = str.length;
     if(len == 1) { return false;}
     for (let i = 0; i < parseInt(len / 2, 10); i++)
     {
         if (str[i] != str[len - 1 - i ])
             return false;
     }
     return true;
 }

// //Using Anonymous Function
var foo = function(arr){
    var n = arr.length;
    for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == true)
            console.log(arr[i]);
        }
    }

foo(array); 

//Using meathod IIFE

(function(arr){
    var n = arr.length;
    for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == true)
            console.log(arr[i]);
        }
})(array);

// Output :- All the Palindromes in an array
