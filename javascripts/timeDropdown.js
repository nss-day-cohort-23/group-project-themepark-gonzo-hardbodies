

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
        // console.log("timeInt",timeInt,"selectedTime",+selectedTime.split(':')[0]); //CB CONSOLE LOG
        if (+selectedTime.split(':')[0] <= timeInt) {
            shouldBeShownVal = true; 
        }
    });
    return shouldBeShownVal;
}
function filterBySelectedTime(attractions, selectedTime, areas) { //4. cb add areas
    let filteredAttractions = attractions.filter(attraction => {
        return shouldBeShown(attraction, selectedTime);
    });
    console.log('filteredAttractions',filteredAttractions,"areas",areas);

    for(let j = 0; j <filteredAttractions.length; j++){
        for (let i = 0; i < areas.length; i++) {
       
            
              if (areas[i].id === filteredAttractions[j].area_id){
                 filteredAttractions[j].areaName = areas[i].name;
                 
             }
         }       
        
    }
    console.log("filtered",filteredAttractions);
    controller.updateToDom(filteredAttractions);
}

function enableEventListener(attractions, areas) { //2. cb add areas
    let timeSelect = document.getElementById("startTimeSelect");
    // console.log("areas in enable event listener", areas, attractions);//cb
    timeSelect.addEventListener("change", e => {
        filterBySelectedTime(attractions, e.target.value, areas); //3. cb add areas
        
    });   
}

module.exports.userSelectsTime = (attractions,areas) => {
    enableEventListener(attractions, areas);// 1. cb add areas 
    // console.log("user selects times", areas); cb
};

// module.exports.attractionArea = (areas, attraction) => {
//     for (let i = 0; i < areas.length; i++) {
//         if (areas[i].id === attraction.area_id) {
//             return areas[i].name;
//         }        
//     }
// };