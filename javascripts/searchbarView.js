'use strict';

let searchbar = require('./searchbar');

//want name to equal area id - USE REGULAR EXPRESSIONS - did it but not that way;
//want bordered area to be unbordered when new attraction is searched;
//if user puts in pirates, it shows all the attractions with pirates in it;
//also would be nice if it showed suggestions as you type
// Zanzibar Trading Co

let mapSection;

let highlightAreaofSearchedAttractionAndOutputInfo = (attractions) => {
    let attractionsAreaIdNameAndDescription = searchbar.getAreaNameAndDescriptionOfSearchedAttraction(attractions);
    console.log("attraction area ids, name, and description", attractionsAreaIdNameAndDescription);
    let userText = document.getElementById("userInput");
    for (let i=0; i<attractionsAreaIdNameAndDescription.length; i++) {
        if (userText.value === attractionsAreaIdNameAndDescription[i]) {
        // if (attractionsAreaIdNameAndDescription[i].includes(userText.value)) {
            let correspondingId = attractionsAreaIdNameAndDescription[i + 1];
            let mapSection = document.getElementById(`mapArea${correspondingId}`);
            mapSection.style.border = "none";
            console.log('map section', mapSection);
            mapSection.style.border = "2px solid black";
            let output = document.getElementById("currentShows");
            output.innerHTML = `
            ${attractionsAreaIdNameAndDescription[i]}: ${attractionsAreaIdNameAndDescription[i + 2]}
            `;
        }
    }
};

module.exports.pressingEnter = (attractions) => {
    let userText = document.getElementById("userInput");
    userText.addEventListener('keypress', function (e) {
    var key = e.keyCode;
        if (key === 13) {
            // console.log("mapSection:", mapSection);
            // mapSection.style.border = "none";
            highlightAreaofSearchedAttractionAndOutputInfo(attractions);
            userText.value = "";
        }
    });
};
