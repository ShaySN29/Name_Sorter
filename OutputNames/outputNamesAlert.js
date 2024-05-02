const dialog = require('dialog');  //used to show alert 
const { OutputNames } = require('./outputNames.js');  //used to show alert 

class OutputNamesAlert extends OutputNames {
    constructor() {
        super();
    }

    output(names) {
        // Shows the sorted names in an alert
        dialog.info(names);
    }
}

module.exports = { OutputNamesAlert }