'use strict';
let $ = require("jquery");

module.exports.outputToDom= (attractionArray) =>{
    let currentShow = document.getElementById("currentShows");
    console.log(attractionArray, "attraction array what value do I need for descrip");
    currentShow.innerHTML = "";
    for (let i = 0; i < attractionArray.length; i++) {
        currentShow.innerHTML += `<h4><a href="#">${attractionArray[i].name}</a><h4><p hidden>${attractionArray[i].description}</p>`;
    }
    $(document).delegate("h4","click", function(){
        $("p:hidden").show();
    });
   
};


