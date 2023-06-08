
const allowedOrigins = require("../config/allowedOrigins.js");

const credentials = (req, res, next) => {
    const origin = req.headers.origin
        //||'https://nfs.faireconomy.media/ff_calendar_thisweek.json?version=722d3e30a77e7ccbb6395d33fd892be6'


    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader( 'Access-Control-Allow-Origin',origin)
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Max-Age', 1728000);
        next();
    }


}

module.exports = credentials