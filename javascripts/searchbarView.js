'use strict';

let searchbar = require('./searchbar');



//Walt Disney's Enchanted Tiki Room
//want name to equal area id - USE REGULAR EXPRESSIONS;
//want area id to equal value in map area, then highlight the value
//if user puts in pirates, it shows all the attractions with pirates in it;

let highlightAreaofSearchedAttraction = (attractions) => {
    let attractionsAreaIdAndName = searchbar.getAreaOfSearchedAttraction(attractions);
    console.log("attractions area Id", attractionsAreaIdAndName);
    let userText = document.getElementById("userInput");
    for (let i=0; i<attractionsAreaIdAndName.length; i++) {
        if (userText.value === attractionsAreaIdAndName[i]) {
            console.log(attractionsAreaIdAndName[i]);
            console.log(attractionsAreaIdAndName[i +1]);
            let correspondingId = attractionsAreaIdAndName[i + 1];
            console.log("corresponding id", correspondingId);
            let mapSection = document.getElementById(`mapArea${correspondingId}`);
            mapSection.style.border = "2px solid black";
            console.log("map section", mapSection);
        }
    }
};

module.exports.pressingEnter = (attractions) => {
    let userText = document.getElementById("userInput");
    userText.addEventListener('keypress', function (e) {
        var key = e.keyCode;
        if (key === 13) {
            highlightAreaofSearchedAttraction(attractions);
            userText.value = "";
        }
    });
};
