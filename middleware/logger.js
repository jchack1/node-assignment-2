const fs = require("fs");


function logger(request, response, next){
    fs.appendFile('log.txt','Name: ' + request.body.name + '\r\n' + 'Email: '+ request.body.email + '\r\n'+ '\r\n', function () {
        console.log('Log updated')});
    next();
}

module.exports = logger;