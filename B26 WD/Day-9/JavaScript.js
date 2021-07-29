// Code to get countries from Asia region
fetch("https://restcountries.eu/rest/v2/all").then((resp) => resp.json()).then((result) => {
   let tt = result.filter(result => result.region == "Asia")
   console.log(tt);
}).catch((err) => console.log(err));

// Output :- Countries from asia region

