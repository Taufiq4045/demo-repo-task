// Find the culprit and nail them - JS debugging functions 

var arr = ["guvi", "geek", "zen", "fullstack"];

var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr);

 // Output :- String in title caps
 
