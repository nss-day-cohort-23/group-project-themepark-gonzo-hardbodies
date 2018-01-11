"use strict";
<<<<<<< HEAD

let controller = require("./controller");
=======
let factory = require("./factory");
let formatter = require("./formatter");

let promArr =[
    factory.fetchAttractions(),
    factory.fetchAreas(),
    factory.fetchAttractionTypes()    
];

Promise.all(promArr)
.then( (parkDataArr) => {
    let areas = parkDataArr[1];
    let attractions = formatter.formatData(parkDataArr);
    console.log("attractions", attractions);
});
>>>>>>> f6613f3a9bd5c6162948d0b067d5e4ed25108021
