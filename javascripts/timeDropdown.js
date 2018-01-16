// module that listens for the user's selection and finds attractions based on the time
'use strict';
function shouldBeShown(attraction, selectedTime) {
    let shouldBeShownVal = false;
    if (attraction.times == null) {
        return true;
    }
    attraction.times.forEach(time => {
        let timeInt = +time.split(':')[0];
        if (+selectedTime <= timeInt) {
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

    
}
function enableEventListener(attractions) {
    let timeSelect = document.getElementById("startTimeSelect");
    timeSelect.addEventListener("change", e => {
        filterBySelectedTime(attractions, e.target.value);
    });   
}

module.exports.userSelectsTime = (attractions) => {
    enableEventListener(attractions);
};