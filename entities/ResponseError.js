/* ========= ResponseError ==========
|     Class with error response     |
| =================================*/

const uuidv4 = require('uuid/v4');
const colors = require('colors');

class ResponseError {

    constructor(message, errorType) {
        this.message = message;
        this.type = errorType;
        this.timestamp = new Date().getTime().toString().slice(0, -3);
        this.errorId = uuidv4();
    }

    static printError(error) {
        console.log(JSON.stringify(error).red);
    }

}

module.exports = ResponseError;