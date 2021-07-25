// JS to Print all the Palindromes in an array
var array = ["cac","abc","ranar","neon","malayalam"];

function isPalindrome(N)
 {
     let str = "" + N;
     let len = str.length;
     if(len == 1) { return false;}
     for (let i = 0; i < parseInt(len / 2); i++)
     {
         if (str[i] != str[len - 1 - i ])
             return false;
     }
     return true;
 }

//Using arrow Function
var foo = (arr) => {
    
    var n = arr.length;
    for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == true)
            console.log(arr[i]);
        }
}

foo(array);

// Output :- Palindromes in an array