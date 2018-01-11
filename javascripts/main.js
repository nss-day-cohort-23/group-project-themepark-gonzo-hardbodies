"use strict";

let factory = require("./factory");
let searchbar = require('./searchbar');
let searchbarView = require('./searchbarView');


factory.fetchAttractions()
.then(attractions => {
    searchbarView.pressingEnter(attractions);
});

factory.fetchAreas()
.then(areas => {
    console.log("areas",areas);
});

factory.fetchAttractionTypes()
.then(types => {
    console.log("types",types);
});

