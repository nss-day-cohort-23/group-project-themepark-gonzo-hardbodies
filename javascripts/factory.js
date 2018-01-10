"use strict";
const $ = require("jquery");

module.exports.fetchThemePark = () => {
    return new Promise((resolve,reject) =>{
        $.ajax({
            url:"https://theme-park-e94aa.firebaseio.com/-L2W12A9m_x8_AJGjHyj.json"
        })
        .done(data => {
            resolve(data);
            
        })
        .fail(error => {
            reject(error);
        });
    });
};

