'use strict';

//get attraction's area id
//list attraction info
//highlight in map area that attraction is in

module.exports.getAreaOfSearchedAttraction = (attractions) => {
    let attractionsAreaIdArray = [];
    attractions.forEach(attraction => {
        attractionsAreaIdArray.push(attraction.name);
        attractionsAreaIdArray.push(attraction.area_id);
    });
    return attractionsAreaIdArray;
};




