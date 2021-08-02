// // code to find the third non-repeating element

var  array = [5,89,12,89,12,87,56,36,56];
unique = array.filter((element) => array.indexOf(element) === array.lastIndexOf(element));

console.log(unique[2]);
