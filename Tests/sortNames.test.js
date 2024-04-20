const { sortNames } = require('../Modules/sortingNames.js');


function test_sortNamesForGivenNames() {
    let peopleArray = [
        { givenNames: ["John", "Michael"], lastName: "Smith" },
        { givenNames: ["John", "David"], lastName: "Smith" },
        { givenNames: ["David", "William"], lastName: "Brown" },
        { givenNames: ["Emily", "Grace"], lastName: "White" },
        { givenNames: ["Jacob", "Daniel"], lastName: "Evans" },
    ];

    const sortedNames = sortNames(peopleArray);
    // console.log(sortedNames);

    return sortedNames;

    // return sortedNames[0].givenNames.join(" ");
}

// test_sortNamesForGivenNames();

test("Returns the first correct given names", () => {
    const sortedNames = test_sortNamesForGivenNames();

    expect(sortedNames[0].givenNames.join(" ")).toBe("David William")
    expect(sortedNames[0].lastName).toBe("Brown")

    expect(sortedNames[1].givenNames.join(" ")).toBe("Jacob Daniel")
    expect(sortedNames[1].lastName).toBe("Evans")
});
