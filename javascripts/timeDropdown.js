

// module that listens for the user's selection and finds attractions based on the time
'use strict';
const controller = require('./interactDom');
const factory = require('./factory');

function shouldBeShown(attraction, selectedTime) {
    let shouldBeShownVal = false;
    if (attraction.times == null) {
        return true;
    }
    attraction.times.forEach(time => {
        let timeInt = +time.split(':')[0];
        console.log("timeInt",timeInt,"selectedTime",+selectedTime.split(':')[0]); //CB CONSOLE LOG
        if (+selectedTime.split(':')[0] <= timeInt) {
            shouldBeShownVal = true; 
        }
    });
    return shouldBeShownVal;
}
function filterBySelectedTime(attractions, selectedTime) {
    let filteredAttractions = attractions.filter(attraction => {
        return shouldBeShown(attraction, selectedTime);
    });
    console.log('filteredAttractions',filteredAttractions);

    controller.updateToDom(filteredAttractions);
    

    
}
function enableEventListener(attractions) {
    let timeSelect = document.getElementById("startTimeSelect");
    timeSelect.addEventListener("change", e => {
        filterBySelectedTime(attractions, e.target.value);
        
    });   
}

module.exports.userSelectsTime = (attractions,areas) => {
    enableEventListener(attractions);
    console.log("user selects times", areas);
};