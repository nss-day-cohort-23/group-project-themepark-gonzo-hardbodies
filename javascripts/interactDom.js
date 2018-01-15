'use strict';
const { attractionArea } = require("./timeOnLoad");

let $ = require("jquery");

module.exports.outputToDom= (attractionArray, areas) =>{
    let currentShow = document.getElementById("currentShows");
    currentShow.innerHTML = "";
    for (let i = 0; i < attractionArray.length; i++) {
        let attractionAreaVar = attractionArea(areas, attractionArray[i]);
        if (attractionArray[i].hasOwnProperty('times')){
            let gotTimeString = getTimeString(attractionArray[i].times);
            currentShow.innerHTML += `<div><h4><a href="#">${attractionArray[i].name} (${attractionAreaVar})</a><p>${gotTimeString}</p><p class="descrip">${attractionArray[i].description}</p><h4></div>`;
        } else {
            currentShow.innerHTML += `<div><h4><a href="#">${attractionArray[i].name} (${attractionAreaVar})</a><p class="descrip">${attractionArray[i].description}</p><h4></div>`;  
        }
    }
    $(document).on("click",$(".link"), function(){
        $(".descrip").hide();
        $(event.target).siblings(".descrip").toggle();
        event.preventDefault();
        }
    );
};

function getTimeString (timeArray){
    let timeString = '';
    for (let i = 0; i < timeArray.length; i++) {
    timeString += `${timeArray[i]} `;           
    }
    return timeString;
}

