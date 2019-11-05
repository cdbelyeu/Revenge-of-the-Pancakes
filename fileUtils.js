var fs = require('fs');

let testFile = (filename) => {
    if (fs.existsSync(filename)) {
        return true;
    }
    return false;
}

// this won't scale well. If we need to process any
// large input files, we will need to us an async method
let readFromFileBlocking = (filename, handler) => {
    return fs.readFileSync(filename, 'utf8').split('\n');
}

let isDirectory = (path) => {
    return fs.lstatSync(path).isDirectory();
}

let getDirectoryFiles = (path) => {
    return fs.readdirSync(path);
}

module.exports = {
    testFileExists: testFile,
    readFromFileBlocking: readFromFileBlocking,
    isDirectory: isDirectory,
    getDirectoryFiles: getDirectoryFiles
};