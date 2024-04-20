const { readDataFromFile, writeDataToFile } = require('./Modules/fileReaderAndWriter.js');
const { sortNames } = require('./Modules/sortingNames.js');
const { argv } = require('node:process');  // used to pass a file path into the console
var dialog = require('dialog');  //used to show alert 

// console.log(argv);

// filePath is equal to the 3rd argument (argv[2]) passed into the console. The readDataFromFile function is called from the fileReaderAndWriter Module
const filePath = argv[2];
const listOfNames = readDataFromFile(filePath);
    
// console.log(listOfNames);

// listOfNames is returned as a string from the text file. split() removes the line between the names and returns them in an array
let unsortedNamesArray = listOfNames.split("\r\n");

// Mapping through the array of unsorted names to return each person as an object. Given Names are returned as an array 
let peopleArray = unsortedNamesArray.map(x => {
    let person = {};
    let fullName = x.split(" ");
    
    person.givenNames = fullName.slice(0, fullName.length - 1);
    person.lastName = fullName[fullName.length - 1];

    return person;
});

// console.log(unsortedNamesArray);
// console.log(peopleArray);

// The sortNames function is called from the sortingNames Module
const sortedNames = sortNames(peopleArray);

// Mapping through the sorted names to join the given names in the given names array. An array with the given names followed by the 
// last name is returned  
const fullNamesArray = sortedNames.map(person => {
    return [person.givenNames.join(" "), person.lastName].join(" ");
});

// console.log(fullNamesArray);

// The toString() method converts the array to a string
let fullNamesString = fullNamesArray.toString();

// console.log(fullNamesString);

// Using the split method to split the string and join method to add a new line
const sortedNamesList = fullNamesString.split(",").join("\n");

// console.log(splitFullNameString);

// The writeDataToFile function is called from the fileReaderAndWriter Module 
writeDataToFile('./Text-Files/sorted-names-list.txt', sortedNamesList);

// Shows the sorted names in an alert
dialog.info(sortedNamesList);