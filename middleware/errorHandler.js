const { logEvents } = require('./logEvents');
const createError = require("http-errors");

const errorHandler = (err) => {
    logEvents(`${err.name}: ${err}`, 'errLog.txt').then(r =>{console.log(   r)} );
    console.error(err.stack)
    createError(err);
}

module.exports = errorHandler;