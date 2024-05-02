const { Person } = require('../Models/person.js');

// The createPeople function creates each person as an onject
function createPeople(allNames) {
    // allNames is returned as a string from the text file. split() removes the line between the names and returns them in an array
    let unsortedNamesArray = allNames.split("\r\n");

    // Mapping through the array of unsorted names to return each person as an object. Given Names are returned as an array 
    let peopleArray = unsortedNamesArray.map(x => {
        const fullName = x.split(" ");
        const givenNames = fullName.slice(0, fullName.length - 1);
        const lastName = fullName[fullName.length - 1];
    
        const person = new Person(givenNames, lastName);
    
        return person;
    });

    return peopleArray;
}

function getPeopleAsStringList(people) {
    // Mapping through the sorted names to join the given names in the given names array. An array with the given names followed by the 
    // last name is returned  
    const fullNamesArray = people.map(person => {
        return [person.givenNames.join(" "), person.lastName].join(" ");
    });

    // The toString() method converts the array to a string
    let fullNamesString = fullNamesArray.toString();

    // Using the split method to split the string and join method to add a new line
    const sortedNamesList = fullNamesString.split(",").join("\n");

    return sortedNamesList;
}

module.exports = { createPeople, getPeopleAsStringList };
