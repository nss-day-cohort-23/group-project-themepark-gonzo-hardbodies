"use strict";
const $ = require("jquery");

function outputToDom(attractionArray){
    let currentShow = document.getElementById("currentShows");
    currentShow.innerHTML="";
    for (let i = 0; i < attractionArray.length; i++){
        currentShow.innerHTML+= `<p><a>${attractionArray[i]}</a></p>`;
    }
}

module.exports.attractionName = (attractionsData) => {
   
    //loop through attractions array
    let $map = $("#map");

    $map.click(()=>{
        console.log("click");
    let attractionArray = [];
    if (event.target.id != "mapAreaEmpty"){
        attractionsData.forEach((attraction) => {
            
        
                let currentShow = document.getElementById("currentShows");
                
                console.log("char", +event.target.id.charAt(event.target.id.length-1));
                if (+event.target.id.charAt(event.target.id.length-1) === attraction.area_id){
                
                attractionArray.push(attraction.name);
            

        
                }
                
            });

            console.log("attraction array",attractionArray);
            outputToDom(attractionArray);
        }   
    });


};

//     let $map = $("#map");
//     $map.click(()=>{
//         if(event.target.id === "mapArea1" && attraction.area_id === 1){
//             console.log("mapArea1");
        
//         }
//     });
// };



//Given user wants to see the attraction list of an area

// When the user clicks on an area

// Then all attraction names assigned to that area should be listed in the left 30% of the screen
// And the attraction type should be in parenthesis next to the name
// And the name should be a hyperlink