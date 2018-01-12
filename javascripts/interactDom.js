'use strict';

module.exports.outputToDom= (attractionArray) =>{
    let currentShow = document.getElementById("currentShows");
    currentShow.innerHTML = "";
    for (let i = 0; i < attractionArray.length; i++) {
        currentShow.innerHTML += `<p><a href="#">${attractionArray[i].name}</a></p>`;
    }
};