
/*
    This method finds the number of times we need to flip a segment of a stack of pancakes, 
        starting with the top, in order for the whole stack to be right side up

    pancakes which are right (or happy) side up are represented by '+', upside down pancakes are represented with '-'
    the input string representing a stack of pancakes from top to bottom

    Example: 
    +++-+

    ALGORITHM:
    The stack needs to be flipped once for each time a pancake is oriented differently from the one on top of it (in order to align them)
    and once at the end of the string if the last pancake was upside-down.

    For simplicity, this last case can be covered by adding a virtual pancake which is right-side up at the bottom of the stack, 
    this trivializes the exit case

    The method returns the number of flips required to fully align the stack
    Big O complexity of this method is O(n)
*/
let getRequiredNumberOfFlips = (line) => {
    let terminatedLine = line + '+';
    let number = 0;
    for(let i = 0; i < terminatedLine.length - 1; i++) {
        if (terminatedLine[i] !== terminatedLine[i + 1]) {
            number = number++;
        }
    }

    return number;
}

let isLineValidStack = (line) => {
    if (line.length > 100 || line.length == 0) {
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