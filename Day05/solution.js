const fs = require("fs");

const splitInput = fs.readFileSync(`${__dirname}/input`).toString().split("\n\n");
const stacksInput = splitInput[0].split("\n");
const moves = splitInput[1].split("\n");

function createStacks(stacksInput) {
    let stacks = [];
    const maxStacks = Math.max(...stacksInput[stacksInput.length - 1]
                                    .match(/\d+/g)
                                    .map(num => +num));

    for (let loop = 0; loop < maxStacks; loop++) {
        stacks.push([]);
    }

    for (let loop = stacksInput.length - 2; loop >= 0; loop--) {
        let stackNum = 0;
        let strLoop = 0;
        while(strLoop < stacksInput[loop].length) {
            const substr = stacksInput[loop].substring(strLoop, strLoop + 3).trim();
            if (substr !== "") {
                stacks[stackNum].push(substr.charAt(1));
            }
            stackNum++;
            strLoop += 4;
        }
    }
    return stacks;
}

function solve(part) {
    const stacks = createStacks(stacksInput);
    
    for (let move of moves) {
        const splitOnSpace = move.split(" ");
        const count = +splitOnSpace[1];
        const source = +splitOnSpace[3] - 1;
        const destination = +splitOnSpace[5] - 1;
    
        const cratesToMove = [];
        for (let loop = 0; loop < count; loop++) {
            cratesToMove.push(stacks[source].pop());
        }
    
        if (part == "part1") {
            stacks[destination].push(...cratesToMove);
        } else {
            stacks[destination].push(...cratesToMove.reverse());
        }
    }
    
    let topCrates = "";
    for (let stack of stacks) {
        topCrates += stack[stack.length - 1];
    }
    
    console.log(topCrates);
}

// BWNCQRMDB
solve("part1");
// NHWZCBNBF
solve("part2");