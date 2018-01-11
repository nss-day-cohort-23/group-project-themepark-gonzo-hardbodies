"use strict";
let moment = require("moment");


module.exports.attractionsByTime = (timeArray) => {
    console.log("It's working!");
    let theHour = +moment().format("H");
    console.log('the hour',theHour);

    for (let i = 0; i < timeArray.length; i++) {
        const time = timeArray[i];

        let timeStringArray = time.split(":");

        console.log('timeStringArray',timeStringArray);
       
        console.log('addition test', +timeStringArray[0] + 12);
        console.log('typeOf', typeof(theHour));
        console.log('theHour',theHour);

        if (+timeStringArray[0] === theHour && +timeStringArray[0] < 22 && timeStringArray[1].includes("AM")) {
            console.log('true');
            return true;
        } else if (+timeStringArray[0] + 12 === theHour && +timeStringArray[0] < 22 && timeStringArray[1].includes("PM")) {
            console.log('true');
            return true;
        } 
    }
    console.log('you done fucked up');
    return false;
        // loop through attractions.times and compare to theHour //
            // string.split to only compare theHour with the hour //
            // look through string to see if AM or PM is contained therin //
            // if PM is included, add 12 to the number //
            // then compare theHour with the new hour //
};
