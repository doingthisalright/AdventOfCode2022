const fs = require("fs");

const buffer = fs.readFileSync(`${__dirname}/input`).toString();

function solve(distinctChars) {
    const map = {};

    const splitBuffer = buffer.split("");
    let start = 0;
    let end = 0;
    
    map[splitBuffer[start]] = 0;
    
    while (end < splitBuffer.length) {
        if (end - start + 1 == distinctChars) {
            break;
        }

        end++;
        const currentChar = splitBuffer[end];

        if (map[currentChar] >= 0) {
            const newStart = map[currentChar] + 1;
            while (start < newStart) {
                map[splitBuffer[start]] = -1;
                start++;
            }
        }
        map[currentChar] = end;
    }

    return end +  1;
}

function part1() {
    console.log(solve(4));
}

function part2() {
    console.log(solve(14));
}

// 1760
part1();
// 2974
part2();