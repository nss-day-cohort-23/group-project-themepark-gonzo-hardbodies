"use strict";
const $ = require("jquery");


module.exports.attractionName = (attractionsData) => {
    let $currentShows = $("#currentShows");
    //loop through attractions array
    attractionsData.forEach((attraction) => {
        console.log("attraction name",attraction.name, attraction.area_id);
    });

};

    //loop through names 
        //loop through ids
        //

//Given user wants to see the attraction list of an area

// When the user clicks on an area

// Then all attraction names assigned to that area should be listed in the left 30% of the screen
// And the attraction type should be in parenthesis next to the name
// And the name should be a hyperlink