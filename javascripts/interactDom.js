'use strict';
let $ = require("jquery");

module.exports.outputToDom= (attractionArray) =>{
    let currentShow = document.getElementById("currentShows");
    currentShow.innerHTML = "";
    for (let i = 0; i < attractionArray.length; i++) {
        currentShow.innerHTML += `<div id=d${i}><h4 id=h${i}><a id=${i} href="#">${attractionArray[i].name}</a><p id=p${i} style="display:none;" class="descrip">${attractionArray[i].description}${attractionArray[i].times}</p><h4></div>`;
    }

    $(document).on("click",event.target, function(){
        console.log("et", event.target);
        $(event.target).next().first("p:hidden").show();
        console.log("first event.next", $(event.target).next());
        }
    )
    .on("click",event.target,function(){
        $(event.target).parent().parent().prev().first("p:hidden").hide();
    });

};



