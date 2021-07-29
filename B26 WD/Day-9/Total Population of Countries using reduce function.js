// Code to get the total population of countries
fetch("https://restcountries.eu/rest/v2/all").then((resp) => resp.json()).then((result) => {
  let total =  result.reduce(function(accumulator, currentValue) {
      return accumulator+currentValue.population},0)
     console.log(total);
}).catch((err) => console.log(err));

// Output :- Total population = 7349137231

