// JS to Print the string in title caps
var str = "geek for geeks";

//Using arrow Function
var foo = (string) => {
    
    let title = string.toLowerCase().replace(/\b(\w)/g, a => a.toUpperCase());
    console.log(title);
}

foo(str);

// Output :- String to title caps