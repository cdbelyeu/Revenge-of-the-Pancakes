

let getRequiredNumberOfFlips = (line) => {
    let terminatedLine = line + '+';
    let number = 0;
    for(let i = 0; i < terminatedLine.length - 1; i++) {
        if (terminatedLine[i] !== terminatedLine[i + 1]) {
            number = number + 1;
        }
    }

    return number;
}

let isLineValidStack = (line) => {
    if (line.length > 100) {
        return false;
    }

    for(let i = 0; i < line.length; i++) {
        if (line[i] !== '+' && line[i] !== '-') {
            return false;
        }
    }

    return true;
}

module.exports = {
    getRequiredNumberOfFlips: getRequiredNumberOfFlips,
    isLineValidStack: isLineValidStack
};