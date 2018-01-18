"use strict";
let moment = require("moment");


module.exports.attractionsByTime = (timeArray) => {
    let theHour = +moment().format("H");
    for (let i = 0; i < timeArray.length; i++) {
        const time = timeArray[i];
        // console.log('timeArray[0]',timeArray[0]);
        let timeStringArray = time.split(":");
        if (+timeStringArray[0] === theHour && +timeStringArray[0] < 22 && timeStringArray[1].includes("AM")) {           
            return true;
        } else if (+timeStringArray[0] + 12 === theHour && +timeStringArray[0] < 22 && timeStringArray[1].includes("PM")) {      
            return true;
        } 
    }
    return false;
};

module.exports.attractionArea = (areas, attraction) => {
    for (let i = 0; i < areas.length; i++) {
        if (areas[i].id === attraction.area_id) {
            return areas[i].name;
        }        
    }
};

