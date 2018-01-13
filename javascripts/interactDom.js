'use strict';
let $ = require("jquery");

module.exports.outputToDom= (attractionArray) =>{
    let currentShow = document.getElementById("currentShows");
    currentShow.innerHTML = "";
    for (let i = 0; i < attractionArray.length; i++) {
        if (attractionArray[i].hasOwnProperty('times')){
            console.log("help");
            currentShow.innerHTML += `<div><h4><a href="#">${attractionArray[i].name}</a><p style="display:none;" class="descrip">${attractionArray[i].description}${attractionArray[i].times}</p><h4></div>`;
        } else {
            currentShow.innerHTML += `<div><h4><a href="#">${attractionArray[i].name}</a><p style="visibility:hidden;" class="descrip">${attractionArray[i].description}</p><h4></div>`;

        }
    }

    $(document).on("click",event.target, function(){
        console.log("et", event.target);
        $(event.target).next().first("p:hidden").css('visibility','visible');
        console.log("first event.next", $(event.target).next());
        }
    )
    .on("click",event.target,function(){
        $(event.target).parent().parent().prev().first("p:hidden").hide();
    });

};



