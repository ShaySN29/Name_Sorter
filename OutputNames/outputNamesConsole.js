const { OutputNames } = require('./outputNames.js');  //used to show alert 

class OutputNamesConsole extends OutputNames {
    constructor() {
        super();
    }

    output(names) {
        console.log(names);
    }
}

module.exports = { OutputNamesConsole }