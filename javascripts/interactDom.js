'use strict';
let $ = require("jquery");

module.exports.outputToDom= (attractionArray) =>{
    let currentShow = document.getElementById("currentShows");
    currentShow.innerHTML = "";
    for (let i = 0; i < attractionArray.length; i++) {
        if (attractionArray[i].hasOwnProperty('times')){
            console.log("help");
            currentShow.innerHTML += `<div><h4><a class="link" href="#">${attractionArray[i].name}</a><p class="descrip>${attractionArray[i].description}${attractionArray[i].times}</p><h4></div>`;
        } else {
            currentShow.innerHTML += `<div><h4><a href="#">${attractionArray[i].name}</a><p class="descrip">${attractionArray[i].description}</p><h4></div>`;

        }
    }

    $(document).on("click",$(".link"), function(){
        console.log("you clicked on link");
        console.log("et", event.target);
        // $(event.target).next().first("p:hidden").css('visibility','visible');
        // console.log("first event.next", $(event.target).next());
        // $(".descrip").hide();
        $(".descrip").hide();
        $(event.target).siblings(".descrip").toggle();
        
        }
    );
    // .on("click",event.target,function(){
    //     $(event.target).parent().parent().prev().first("p:hidden").css('visibility','hidden');
    // });

};



//footer


const d = new Date();

const month = d.getMonth()+1;
const day = d.getDate();
const year = d.getFullYear();

$("#copyright").html(`&copy ${day}/${month}/${year}`);

