'use strict';
let $ = require("jquery");

module.exports.outputToDom= (attractionArray) =>{
    let currentShow = document.getElementById("currentShows");
    console.log(attractionArray, "attraction array what value do I need for descrip");
    currentShow.innerHTML = "";
    for (let i = 0; i < attractionArray.length; i++) {
        currentShow.innerHTML += `<div id=${i}><h4 id=${i}><a href="#">${attractionArray[i].name}<li style="display:none;">${attractionArray[i].description}</li></a><h4></div>`;
    }

    $(document).on("click",event.target, function(){
        console.log("et", event.target);
        $(event.target).children().first("li:hidden").toggle();
        }
    );   
};



