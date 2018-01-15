'use strict';

let $ = require('jquery');

//want name to equal area id - USE REGULAR EXPRESSIONS - did it but not that way;
//want bordered area to be unbordered when new attraction is searched;
//if user puts in pirates, it shows all the attractions with pirates in it;
//also would be nice if it showed suggestions as you type
// Zanzibar Trading Co
// Merchant of Venus

let mapSection;

let highlightAreaofSearchedAttractionAndOutputInfo = (attractions) => {
    let userText = document.getElementById("userInput");
    for (let i=0; i<attractions.length; i++) {
        if (userText.value === attractions[i].name) {
            let correspondingId = attractions[i].area_id;
            let mapSection = document.getElementById(`mapArea${correspondingId}`);
            mapSection.style.border = "none";
            mapSection.style.border = "2px solid black";
            let output = document.getElementById("currentShows");
            output.innerHTML = `
            ${attractions[i].name}: ${attractions[i].description}
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
