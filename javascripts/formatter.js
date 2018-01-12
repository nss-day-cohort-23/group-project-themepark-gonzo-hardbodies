"use strict";

const $ = require("jquery");

module.exports.formatData = (data) => {
    let attractions = data[0];
    let areas = data[1];
    let types = data[2];

    attractions.forEach(attraction => {
        areas.forEach(area => {
            if (attraction.area_id === area.id) {
                attraction.area = area.name;
            }
        });
        types.forEach(type => {
            if (attraction.type_id === type.id) {
                attraction.type = type.name;
            }
        });
    });
    return attractions;
};