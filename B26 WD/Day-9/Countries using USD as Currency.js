// Code to get all the countries using USD as currnecy
fetch("https://restcountries.eu/rest/v2/all").then((resp) => resp.json()).then((result) => {
    var tt = result.filter(result => result.currencies[0].code === "USD")
    var rr = result.filter(result => result.currencies[1])
    var aa = rr.filter(rr => rr.currencies[1].code === "USD")
    var uu = result.filter(result => result.currencies[3])
    var bb = uu.filter(uu => uu.currencies[7].code === "USD")
    console.log([...tt,...aa,...bb]);
  
  
}).catch((err) => console.log(err));

// Output = Countries using USD as currency




