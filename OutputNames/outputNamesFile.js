const { OutputNames } = require('./outputNames.js');
const { writeDataToFile } = require('../Modules/fileReaderAndWriter.js');

class OutputNamesFile extends OutputNames {
    constructor(path) {
        super();
        this.path = path;
    }

    output(names) {
        if (this.path == null) throw new Error("path is null.");

        // The writeDataToFile function is called from the fileReaderAndWriter Module 
        writeDataToFile(this.path, names);
    }
}

module.exports = { OutputNamesFile }