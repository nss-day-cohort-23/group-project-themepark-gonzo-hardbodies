"use strict";
let factory = require("./factory");
let areaAttractions = require("./areaAttractions");

factory.fetchAttractions()
.then(attractions => {
    console.log("attractions",attractions);
    areaAttractions.attractionName(attractions);
});

factory.fetchAreas()
.then(areas => {
    console.log("areas",areas);
});

factory.fetchAttractionTypes()
.then(types => {
    console.log("types",types);
});