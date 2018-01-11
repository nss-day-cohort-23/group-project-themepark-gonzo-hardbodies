"use strict";
let factory = require("./factory");
let searchbar = require('./searchbar');

factory.fetchAttractions()
.then(attractions => {
    searchbar.
    console.log("attractions",attractions);
});

factory.fetchAreas()
.then(areas => {
    console.log("areas",areas);
});

factory.fetchAttractionTypes()
.then(types => {
    console.log("types",types);
});