// The sortingNames Module receives the unsorted list of names in the people array from main.js and sorts them alphabetically.

function sortNames(peopleArray) {

    let sortedNames = peopleArray.slice().sort((a, b) => {
        // The lastNames are sorted below. If they differ the last names will be sorted alphabetically in the list.
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;

        // At this point the last names are equal. The names will be sorted alphabetically by the first given name.
        if (a.givenNames[0] < b.givenNames[0]) return -1;
        if (a.givenNames[0] > b.givenNames[0]) return 1;

        // At this point the last name as well as the first given names are equal. The names will be sorted alphabetically by their 
        // second given name.
        if (a.givenNames.length > 1 && b.givenNames.length > 1) {
            if (a.givenNames[1] < b.givenNames[1]) return -1;
            if (a.givenNames[1] > b.givenNames[1]) return 1;
        }

        // At this point the last name as well as the first and second given names are equal. The names will be sorted alphabetically
        // by their third given name.
        if (a.givenNames.length > 2 && b.givenNames.length > 2) {
            if (a.givenNames[2] < b.givenNames[2]) return -1;
            if (a.givenNames[2] > b.givenNames[2]) return 1;
        }

        // This is the catch, if the number of given names compared are not equal then the names will be sorted alphabetically
        if (a.givenNames.length < b.givenNames.length) return -1;
        if (a.givenNames.length > b.givenNames.length) return 1;

        return 0;
    });

    // console.log("SORT 1", sortedNames);

    // The sorted names are returned as an object
    return sortedNames;
}

module.exports = { sortNames };

