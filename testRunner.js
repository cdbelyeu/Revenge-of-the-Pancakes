var fileUtils = require('./fileUtils');
var pancakeFlippingService = require('./pancakeFlippingService');

// check the file that was passed in
var myArgs = process.argv.slice(2);
if (myArgs.length !== 1) {
    console.log('usage: node inputFileName');
    return -1;
}

// verify that the filename is valid
let inputFileName = myArgs[0];
if (!fileUtils.testFileExists(inputFileName)) {
    console.log('file not found: ' + inputFileName);
    return -1;
}

// read in the value
let fileLines = fileUtils.readFromFileBlocking(inputFileName);

// verify that the file wasn't empty
if (fileLines.length === 0) {
    console.log('Empty File: ' + inputFileName);
    return -1;
}

// verify the file header
if (fileLines[0].length === 0 || isNaN(parseInt(fileLines[0]))) {
    console.log('Invalid file header: ' + fileLines[0]);
    return -1;
}

let numberOfTests = parseInt(fileLines[0]);
if (!fileLines.length === numberOfTests + 1) {
    console.log('Input file length does not match the header value');
    return -1;// this could be extreme. We could also just log the error
}

if (numberOfTests < 1 || numberOfTests > 100) {
    console.log('Invalid number of tests in file. Number of tests must be between 1 and 100');
    return -1;
}

// the file exists, is valid, and the header is a number
// Now, process it line by line an verify/process each one

// start parsing with the second line. The first line is the header
for(let i = 1; i < fileLines.length; i++) {
    if (!pancakeFlippingService.isLineValidStack(fileLines[i])) {
        console.log('Invalid input values for test case ' + i);
        return -1;
    }

    let number = pancakeFlippingService.getRequiredNumberOfFlips(fileLines[i]);
    console.log('Case #' + i + ': ' + number);
}

return 0;