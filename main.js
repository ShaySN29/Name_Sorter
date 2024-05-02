const { readDataFromFile, writeDataToFile } = require('./Modules/fileReaderAndWriter.js');
const { sortNames } = require('./Modules/sortingNames.js');
const { argv } = require('node:process');  // used to pass a file path into the console
const { createPeople, getPeopleAsStringList } = require('./Modules/personConverter.js');
const { OutputNamesAlert } = require('./OutputNames/outputNamesAlert.js');
const { OutputNamesFile } = require('./OutputNames/outputNamesFile.js');
const { OutputNamesConsole } = require('./OutputNames/outputNamesConsole.js');

// filePath is equal to the 3rd argument (argv[2]) passed into the console. The readDataFromFile function is called from the fileReaderAndWriter Module
let filePath = argv[2];

// // For debugging -> no 3rd arg
// if (filePath == null) {
//     filePath = './Text-Files/unsorted-names-list.txt';
// }

const allNames = readDataFromFile(filePath);
    
const peopleArray = createPeople(allNames);

// The sortNames function is called from the sortingNames Module
const sortedNames = sortNames(peopleArray);

// Using the split method to split the string and join method to add a new line
const sortedNamesList = getPeopleAsStringList(sortedNames);

const outputNamesConsole = new OutputNamesConsole();
outputNamesConsole.output(sortedNamesList);

const outputNamesFile = new OutputNamesFile('./Text-Files/sorted-names-list.txt');
outputNamesFile.output(sortedNamesList);

var outputNamesAlert = new OutputNamesAlert();
outputNamesAlert.output(sortedNamesList);