// Code to get the countries name, capital and flag
fetch("https://restcountries.eu/rest/v2/all").then((resp) => resp.json()).then((result) => {
   result.forEach(({name,  flag, capital}) => {
          console.log(name, capital, flag);
   });
}).catch((err) => console.log(err));

// Output :- Countries name, capital and flag

