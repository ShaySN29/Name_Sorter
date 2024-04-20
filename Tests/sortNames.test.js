const { sortNames } = require('../Modules/sortingNames.js');


function test_sortNames() {
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
}

test("Returns correct names", () => {
    const sortedNames = test_sortNames();

    expect(sortedNames[0].givenNames.join(" ")).toBe("David William")

    expect(sortedNames[1].lastName).toBe("Evans")

    expect(sortedNames[2].givenNames.join(" ")).toBe("John David")

    expect(sortedNames[3].lastName).toBe("Smith")

    expect(sortedNames[4].givenNames.join(" ")).toBe("Emily Grace")
});
