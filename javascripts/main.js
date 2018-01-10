"use strict";
let factory = require("./factory");

factory.fetchThemePark()
.then(data => {
    console.log("data",data);
});
