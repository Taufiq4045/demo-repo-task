// JS to Print Odd Numbers in an array
var array = [1,2,3,4,5,-6,7,-8,9,10,-11,12,13,15,16,17];

//Using Anonymous Function
var foo = function(arr){
    arr = arr.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        if(number > 1){ console.log(number);}
      });
}

foo(array);

//Using meathod IIFE

(function(arr){
    arr = arr.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        if(number > 1){ console.log(number);}
      });
})(array);

// Output :- Prime Numbers in an array
