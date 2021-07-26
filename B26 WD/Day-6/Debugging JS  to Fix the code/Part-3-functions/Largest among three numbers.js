// Find the culprit and nail them - JS debugging functions 

var aa = (f,s,t) => {
  
  console.log(f,s,t);
  if(f>s &&f>t){
  console.log(f)}
  else if(s>f && s>t){
  console.log(s)}
  else{
  console.log(t)}
 }
 aa(1,2,3);

 // Output :- Three Numbers
 //       largest among three numbers
