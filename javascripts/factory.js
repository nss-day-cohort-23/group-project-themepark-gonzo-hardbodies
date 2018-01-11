"use strict";
const $ = require("jquery");
let fbURL = "https://theme-park-e94aa.firebaseio.com/-L2W12A9m_x8_AJGjHyj";

module.exports.fetchAttractions = () => {
    return new Promise((resolve,reject) =>{
        $.ajax({
            url:`${fbURL}/attractions.json`
        })
        .done(attractions => {
            resolve(attractions);
            
        })
        .fail(error => {
            reject(error);
        });
    });
};

module.exports.fetchAreas = () => {
    return new Promise((resolve,reject) =>{
        $.ajax({
            url:`${fbURL}/areas.json`
        })
        .done(areas => {
            resolve(areas);
            
        })
        .fail(error => {
            reject(error);
        });
    });
};     


module.exports.fetchAttractionTypes = () => {
    return new Promise((resolve,reject) =>{
        $.ajax({
            url:`${fbURL}/attraction_types.json`
        })
        .done(types => {
            resolve(types);
            
        })
        .fail(error => {
            reject(error);
        });
    });
};     
