// creates xhr as objects & instance of XMLHttpRequest
var xhr = new XMLHttpRequest();
// opens connection with GET method & with (URL endpoint)
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// loads the JSON to us
xhr.onload = function () {
  var t = JSON.parse(this.response);
    t.forEach(function (values){
    console.log(values.flag);
   
  })
};
// handles any error
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
// sends the request
xhr.send();

