'use strict';

let $ = require('jquery');

//also would be nice if it showed suggestions as you type
// Zanzibar Trading Co
// Merchant of Venus

let highlightAreaofSearchedAttractionAndOutputInfo = (attractions) => {
    let userText = document.getElementById("userInput");
    var re = new RegExp(userText.value, "i"); //created a new regular expression object that makes it case insensitive
    let output = document.getElementById("currentShows");
    output.innerHTML = "";

    for (let i=0; i<attractions.length; i++) {
        $(".areaMap").toggleClass("highlighted", false);
    }
    for (let i=0; i<attractions.length; i++) {
        if (re.test(attractions[i].name)) {
            let correspondingId = attractions[i].area_id;
            let mapSection = $(`#mapArea${correspondingId}`);
            mapSection.toggleClass("highlighted", true);
            let output = document.getElementById("currentShows");
            output.innerHTML += `
            ${attractions[i].name}: ${attractions[i].description} <br> <br>
            `;
        }
    }
};

module.exports.pressingEnter = (attractions) => {
    let userText = document.getElementById("userInput");
    userText.addEventListener('keypress', function (e) {
    var key = e.keyCode;
        if (key === 13) {
            highlightAreaofSearchedAttractionAndOutputInfo(attractions);
            userText.value = "";
        }
    });
};
