var btn = document.getElementById("btn");
btn.addEventListener("click", function(get) {
  fetch('https://api.spoonacular.com/recipes/random?apiKey=60aa0853120e4465a674f7b85a9ec7e6')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      document.getElementById("title").innerHTML = data.recipes[0].title;
      document.getElementById("dishType").innerHTML = data.recipes[0].dishTypes.join(", ");
      document.getElementById("totalTime").innerHTML = data.recipes[0].readyInMinutes;
      document.getElementById("totalMinutes").innerHTML = "Total Time: " + data.recipes[0].readyInMinutes + " minutes";
      document.getElementById("sourceURL").innerHTML = data.recipes[0].sourceUrl;
      document.getElementById("instructions").innerHTML = data.recipes[0].instructions;
      var unorderedList = document.getElementById('ingredients');
      var myElement;
      for (var i = 0; i < data.recipes[0].extendedIngredients[i].originalString.length + data.recipes[0].analyzedInstructions[0].steps[i].step.length; i++) {
        myElement = document.createElement("p");
        document.getElementById("ingredients").innerHTML += data.recipes[0].extendedIngredients[i].original;
        unorderedList.appendChild(myElement);
      }
      
      
      
        


      //    const arr = ['cat', 'dog', 'fish'];
      //    arr.forEach(element => {
      //      console.log(element);
      //    });







      //fix ingredients ul
      //add instructions
      //add template literal for image links
    })
    .catch(function(err) {
      console.log(err);
    });
});
