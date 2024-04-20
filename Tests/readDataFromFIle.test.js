const { readDataFromFile } = require('../Modules/fileReaderAndWriter.js');

function test_readDataFromFile() {
    const fileContents = readDataFromFile('./Tests/testFile.txt');

    return fileContents;
}

test_readDataFromFile();

test("Reads data from txt file", () => {
    expect(test_readDataFromFile()).toBe("This is test data")
});