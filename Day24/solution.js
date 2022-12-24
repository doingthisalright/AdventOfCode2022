const fs  = require("fs");

const blizzardMovement = {
    "^": [-1, 0],
    ">": [0, 1],
    "v": [1, 0],
    "<": [0, -1],
}

const humanMovements = [
    [0, 0],
    ...Object.values(blizzardMovement),
]

function isPositionOutOfBounds(row, col, grid) {
    return row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1;
}

function wrapAroundGridIfNeeded(row, col, grid) {
    if (!isPositionOutOfBounds(row, col, grid)) {
        return [row, col];
    }
    let newRow = row;
    let newCol = col;
    if (row < 0) {
        newRow = grid.length - 1;
    }
    if (row > grid.length - 1) {
        newRow = 0;
    }
    if (col < 0) {
        newCol = grid[0].length - 1;
    }
    if (col > grid[0].length - 1) {
        newCol = 0;
    }

    return [newRow, newCol];
}

function destinationReached(currentPosition, destinationPosition) {
    return currentPosition[0] == destinationPosition[0] && currentPosition[1] == destinationPosition[1];
}

function getNextBlizzardPosition(blizzardMap, startRow, startCol, direction) {
    const movement = blizzardMovement[direction];
    let newRow = startRow;
    let newCol = startCol;
    do {
        const newPosition = wrapAroundGridIfNeeded(newRow + movement[0], newCol + movement[1], blizzardMap);;
        newRow = newPosition[0];
        newCol = newPosition[1];
    } while (blizzardMap[newRow][newCol] == "#")
    return [newRow, newCol];
}

function moveBlizzard(blizzardMap) {
    const newBlizzardMap = blizzardMap.map(row => new Array(row.length).fill([]));

    for (let row = 0; row < blizzardMap.length; row++) {
        for (let col = 0; col < blizzardMap[0].length; col++) {
            const blizzardsAtCurrentPosition = blizzardMap[row][col];
            for (let blizzard of blizzardsAtCurrentPosition) {
                if (blizzard == "#") {
                    newBlizzardMap[row][col] = ["#"];
                } else {
                    const nextPosition = getNextBlizzardPosition(blizzardMap, row, col, blizzard);
                    newBlizzardMap[nextPosition[0]][nextPosition[1]] = [...newBlizzardMap[nextPosition[0]][nextPosition[1]], blizzard];
                }
            }

        }
    }
    return newBlizzardMap;
}

function getNextPositionsForHuman(blizzardMap, currentPosition) {
    const nextPositions = [];

    for (let movement of humanMovements) {
        const newRowPosition = currentPosition[0] + movement[0];
        const newColPosition = currentPosition[1] + movement[1];

        const isNextPositionOutOfBounds = isPositionOutOfBounds(newRowPosition, newColPosition, blizzardMap);
        if (isNextPositionOutOfBounds) {
            continue;
        }

        // This will be empty array if its an open spot
        if (blizzardMap[newRowPosition][newColPosition].length > 0) {
            continue;
        }
        
        nextPositions.push([newRowPosition, newColPosition]);
    }

    return nextPositions;
}

function getMinutes(blizzardMap, startPosition, destinationPosition) {    
    let currentPositions = [ [...startPosition] ];

    let steps = 0;
    while (1) {
        steps++;
        const deDupePositions = blizzardMap.map(row => new Array(row.length).fill(false));

        blizzardMap = moveBlizzard(blizzardMap);

        const newPositions = [];
        for (let currentPosition of currentPositions) {
            const nextPositions = getNextPositionsForHuman(blizzardMap, currentPosition);
            
            if (nextPositions.length !== 0) {
                for (let nextPosition of nextPositions) {
                    deDupePositions[nextPosition[0]][nextPosition[1]] = true;
                }
            }
        }
        for (let row = 0; row < blizzardMap.length; row++) {
            for (let col = 0; col < blizzardMap[0].length; col++) {
                const newPosition = [row, col];
                if (deDupePositions[row][col]) {
                    if (destinationReached(newPosition, destinationPosition)) {
                        return {
                            steps,
                            blizzardMap
                        }
                    }
                    newPositions.push(newPosition);
                }
            }
        }

        currentPositions = newPositions;
    }
}

function solve(part) {
    const gridInput = fs.readFileSync(`${__dirname}/input`).toString().split('\n');
    let blizzardMap = gridInput.map(row => row.split("").map(item => item == "." ? [] : [item]));

    const startPosition = [0, 1];
    const destinationPosition = [blizzardMap.length - 1, blizzardMap[0].length - 1 - 1];

    const result1 = getMinutes(blizzardMap, startPosition, destinationPosition);
    blizzardMap = result1.blizzardMap;

    if (part == "part1") {
        console.log(result1.steps);
        return;
    } else {
        const result2 = getMinutes(blizzardMap, destinationPosition, startPosition);
        blizzardMap = result2.blizzardMap;
        const result3 = getMinutes(blizzardMap, startPosition, destinationPosition);
    
        console.log(result1.steps + result2.steps + result3.steps);
    }
}

// 271
solve("part1");
// 813
solve("part2");
