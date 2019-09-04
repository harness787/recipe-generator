    
const baseURL = "https://api.spoonacular.com/recipes/random?apiKey=60aa0853120e4465a674f7b85a9ec7e6";

function getData(cb) {
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", baseURL + type + "/");
  xhr.send();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}




function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data;
    });
}





   