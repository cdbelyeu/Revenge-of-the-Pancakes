var fileUtils = require('./fileUtils');
var pancakeFlippingService = require('./pancakeFlippingService');

// check the file that was passed in
var myArgs = process.argv.slice(2);
if (myArgs.length !== 1) {
    console.log('usage: node inputFileName');
    return 0;
}

// verify that the filename is valid
let inputFileName = myArgs[0];
if (!fileUtils.testFileExists(inputFileName)) {
    console.log('file not found: ' + inputFileName);
    return 0;
}

// read in the value
let fileLines = fileUtils.readFromFileBlocking(inputFileName);

// verify that the file wasn't empty
if (fileLines.length === 0) {
    console.log('Empty File: ' + inputFileName);
    return 0;
}

// verify the file header
if (fileLines[0].length === 0 || isNaN(parseInt(fileLines[0]))) {
    console.log('Invalid file header: ' + fileLines[0]);
    return 0;
}

let numberOfTests = parseInt(fileLines[0]);
if (!fileLines.length === numberOfTests + 1) {
    console.log('Input file length does not match the header value');
    return 0;// this could be extreme. We could also just log the error
}

// the file exists, is valid, and the header is a number
// Now, process it line by line an verify/process each one

// start parsing with the second line. The first line is the header
for(let i = 1; i < fileLines.length; i++) {
    if (!pancakeFlippingService.isLineValidStack(fileLines[i])) {
        console.log('Invalid input values for test case ' + i);
        return 0;
    }

    let number = pancakeFlippingService.getRequiredNumberOfFlips(fileLines[i]);
    console.log('Case #' + i + ': ' + number);
}