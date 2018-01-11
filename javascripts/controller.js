"use strict";
let factory = require("./factory");
let {attractionsByTime} = require("./timeOnLoad");

factory.fetchAttractions()
    .then(attractions => {
        console.log("attractions", attractions);
        attractionsByTime(timeArray.attractions.times);
    });

factory.fetchAreas()
    .then(areas => {
        console.log("areas", areas);
    });

factory.fetchAttractionTypes()
    .then(types => {
        console.log("types", types);
});