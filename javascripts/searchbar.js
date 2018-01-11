'use strict';

//get attraction's area id
//list attraction info
//highlight in map area that attraction is in

module.exports.getAreaOfSearchedAttraction = (attractions) => {
    let attractionsAreaIdArray = [];
    attractions.forEach(attraction => {
        attractionsAreaIdArray.push(attraction.area_id);
    });
    return attractionsAreaIdArray;
};

module.exports.getNameofSearchedAttraction = (attractions) => {
    let attractionsNameArray = [];
    attractions.forEach(attraction => {
        attractionsNameArray.push(attraction.name);
    });
    return attractionsNameArray;
};


// module.exports.pressingEnter = (attractions) => {
//     let userText = document.getElementById("userInput");
//     userText.addEventListener('keypress', function (e) {
//         var key = e.keyCode;
//         if (key === 13) {
//             console.log("attractions in press enter", attractions);
//             getAreaOfSearchedAttraction(attractions);
//             let attractionsAreaId = getAreaOfSearchedAttraction(attractions);
//             console.log("attractionsAreaId", attractionsAreaId);
//             return attractionsAreaId;
//     }
//     });
// };



