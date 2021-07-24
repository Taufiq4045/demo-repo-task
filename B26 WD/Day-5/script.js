// JS to Print Odd Numbers in an array
var str = "geek for geeks";


//Using Anonymous Function
var foo = function(str) {
   let title = str.toLowerCase().replace(/\b(\w)/g, a => a.toUpperCase());
    console.log(title);
  }

foo(str);

//Using meathod IIFE

(function(string){
    let title = str.toLowerCase().replace(/\b(\w)/g, a => a.toUpperCase());
    console.log(title);
})(str);

// Output :- String in title caps.