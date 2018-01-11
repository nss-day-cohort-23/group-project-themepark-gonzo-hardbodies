'use strict';

let searchbar = require('./searchbar');

let area1 = "Main Street U.S.A.";
let area2 = "Adventureland";
let area3 = "Frontierland";
let area4 = "Liberty Square";
let area5 = "Fantasyland";
let area6 = "Tomorrowland";
let area7 = "Cinderlla Castle";
// let area8 = ;
// let area9 = ;

//Walt Disney's Enchanted Tiki Room
//want name to equal area id
//want area id to equal value in map area, then highlight the value

let highlightAreaofSearchedAttraction = (attractions) => {
    let attractionsAreaId = searchbar.getAreaOfSearchedAttraction(attractions);
    let attractionsName = searchbar.getNameofSearchedAttraction(attractions);
    console.log("attractions area Id in searchbarView", attractionsAreaId);
    console.log("attractions name", attractionsName);
    let userText = document.getElementById("userInput");
    console.log("user text:", userText.value);
    attractionsName.forEach(attraction => {
        if (attraction === userText.value) {
            console.log("name:", attraction);
            attraction = attractionsAreaId;
            console.log(attractionsAreaId);
        }
    });
    attractionsAreaId.forEach((attraction) => { 
        if (attraction === +userText.value) {
            let mapSection = document.getElementById(`mapArea${attraction}`);
            mapSection.style.hover();
            // mapSection;
            // mapSection.forEach(section => {
            //     let mapSectionValue = section.value;
            //     console.log("map section value", mapSectionValue);
            // });
            console.log("map section", mapSection);
            // if (attraction === )

            console.log("attraction", attraction);
        }
    });
    // return attractionsAreaId;
};

module.exports.pressingEnter = (attractions) => {
    let userText = document.getElementById("userInput");
    userText.addEventListener('keypress', function (e) {
        var key = e.keyCode;
        if (key === 13) {
            highlightAreaofSearchedAttraction(attractions);
        }
    });
};