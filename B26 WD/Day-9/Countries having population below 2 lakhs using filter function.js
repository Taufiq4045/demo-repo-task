// Code to get countries having population below 2 lakhs
fetch("https://restcountries.eu/rest/v2/all").then((resp) => resp.json()).then((result) => {
   let tt = result.filter(result => result.population < 200000)
   console.log(tt);
}).catch((err) => console.log(err));

// Output :- Countries having population below 2 lakhs

