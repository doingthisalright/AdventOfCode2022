const gridInput = [
    "#.....###.....#.###....#.#..#...###..#..#....#.#.......#.##.###.####.#...#",
    "##.#..#.#.#.#..##.##......####.##.##...#...##..#.....####..#.#..###...#..#",
    ".#.###...##.#.###.#..##.#..#.###..#.###..#..##.##.########....#...#...##..",
    "##.#...#.##..#...############.#..#..##.#.#.#.####....#.##....#...##.####..",
    "##.#.###....#.##.##.#.####....####.###.#..#...#####.#..###.#.###.....#.#..",
    ".#..#####.#...###..#..#..###..#.#...#.###.###.#.##.#.....#.#.##.##.#.....#",
    "#.#...##..#.###.##.##.##........#.#.##....#..##...#..#####..##..#....#.##.",
    "###....###..#..#.....#..####...###.#.#....#.#.#.#..##.###.#..#..######....",
    "#..#..#...#.#.#.#....#.#.##.#.#.#.#######..#.##...##..####.###.##.#.###.#.",
    "###.##...#...##..#...#.##.##.##.#.#.#.#..#.#.#...###....#.#.##.....###....",
    "....##...##.#.##.#..#...#..#...#.##.#...##..#...#.##...##..#.#.##..#.#....",
    "##.....#.##....##...###.#.#####...####.###....#######.#.....##.#.#..#.##..",
    ".......#####..#.###.#...###..##.##..#.#.###...#..#..##..##.#..#.#..#..##..",
    "#.#..###.#.#.#..#####....###.#..#.#.###...##....#.#.####.##...#....#.#.#..",
    "..#.....##.#.#..###.#...######.##....#####.###...####.#####.##..#...###.#.",
    ".#.####.......##.###.#..#####.#######...##.#.###..#......##..#...#.#.#.#..",
    "##.###.....#.##..#.#.#.#.#..##....####.#...#.###...#.####..#.#......#..#.#",
    "####.......##....######.#.#.#.#..#.##.###.....#...#.#..#.#.###..#.###..##.",
    "##..###..###...##...#.#..##.#..#.#.#.#...#..##..#.#..#....#...##...##.###.",
    "#....#.....####..##.#........#.#..#...#...##...##.#..#..#.#.#.#..#......##",
    "#.#.#..#..##.####......#..#####.#.##..##..##...####.###..#####...#.#..##.#",
    "####.#.##.....#..####.##.####.#####...#####.#....##....#..#..#.###.#.##.#.",
    "..#.##.##.##.#.#...#.###..#.##.######..#..#...#.###..###.###.#.#.#..#.#.#.",
    "..##..##..#..#####...##.###...###.###########.#..#######..#.#.#....#######",
    "#.###.#.##..######.###..##...#..##.#.###..##..#..#.#.#..#.##.#.#..#.#.####",
    "#....#.##...##..#.#.####.......#.#.###.#......###......#..##...#..#.####..",
    "##.####..######.####....#.###.##..#.#.##.#.#..##.#..##.#.##.#.##.#####..#.",
    "#######.####.#.##.########..#..###.###.###...##......#..##.#.#####...#...#",
    "#..##.#.#..######.##.##..#....#..##.#.#####.##..#.##.##..#..###.#.##..##.#",
    "..#.#.#..##...####....##.#.#..####..#.#####.###.#..##.....#..##..##.#.#..#",
    "#.###..####....####..###.#.####.#.##....#.##.###.##.###########..#..###.##",
    "..##.##.##.#.####......####...##..#....#####...#.#....#####..#.#####..##.#",
    "#..##...#...###.#..#.##.##.#.#.#....#..##.###.###.##........#..####.##...#",
    "...#####.####..###........#.##...##....#...#..#...##..###..#####...######.",
    "..#..##..#.......##.#....###..######.##.####.##..##.....##.###.#.#####.#.#",
    "..#.#...#.......##.##.###..#.#.#...#########..###...#....#...#.###.#..#.##",
    "#.#..#..######..#........##..###.##..#.##.#.#..#.#....##.#.#..#.#...#.#.#.",
    "#....#.#.#####.###......#..#..##.##...#......##..#.###..##.####.######.#..",
    "#..#.....#..####.#...##.####..######.#.#.###..##.....##.#.##.######.#.####",
    "....###.#######..#.##..########.....#.#..##..#.#..#.##....#.#..#..#..##.#.",
    "#..#.##.#.#.#.##.#.#.....#..#..#...#..##..##.#..#.##.#.#.#...##.##.#...#.#",
    ".#.######.#..##.#.##.....##.#.##.#.#....######..##..##.#...#...#.#.###..##",
    ".#.#..#..#..#..##.#.####.#.####.#....#.#.###.###.#..###..##.#...#.###.###.",
    "##.#.##..###.####.#.#.###.#......#####.###.######.#..######.#...#.#.####..",
    "###.####..#.###....#.....#.#.##.#.##.#####...##.#...#####.#.###.#..##.....",
    "##..#.#..#.####.#.####...###.#.##..#####.#..###...#####.####..#...#.##.#.#",
    "..##.#####..##.#####..#..#..#..#...##..#.###..##.#....##...#...#.#.##...##",
    "##...#.##..#.##...#.#.####..#.#...####..#.##.#.#...#####.##..#######.##...",
    ".#..####.##...#.#...##..#..###.#####.#.#.#.#..##..##.###.....#...#..####..",
    ".##..#...#.###.####.#.#...#...#####..#..#.#.##...#...##..#.#..#.#.#.###..#",
    "###.##.####.##....#.#..#.##.##..###.####..##..#.####.....#.#.###..#.######",
    "#.##.#.##.#..#..#.#......##.#.##.#..#.#.#.....###.....#......###....#..###",
    ".#..#..#....#..#.#...#..#..##......##...###.###.##...#...#.....#...###.###",
    "#..##..#..##.#....###...#......#.######..#.###..#.#....#......#.##..#.####",
    ".#...##.#..#####..##...#####.#....#######....#.....###....#..###.##..#..#.",
    ".###.#.##..#..#..##..#....#...#.##.##.##.#..#...##..#..##...##..######.###",
    "#....#.#####.###..#.#.......##..##...##..#.###..#####.#..#..##.#..#....##.",
    "##..#......#######...#.##.###..#.....##..#.####.###.##.#..####.#.#####.##.",
    "..#....###.#........#..######.#...##.......##.#.###.##.#...#.##....##.#...",
    "###.....#..##.####.#..###..#..#####.##.##.#######.#.####.####......#.##.##",
    "..#...#...#######.#.####....#.####..#..#..##.#.#.###..#.#####.##.#.....#.#",
    "###.#.#..#.####.##...#.#####.##.####..#.#.###.#..#...#..#########.###.#.##",
    "..######.########..###.#.#.###.#.#.#.#.####.#...#..##...##.#####..##...#.#",
    "...#.#...##.#....####.###..#..#..#..##..###.##..#.#....#..#...######.##.##",
    "#####.##..#..##..#####.#..#..#..###.##..##...###....#.###.#.#.##...###..##",
    "..#.##.#....####..#.#..###.#.#..##...#..##....####.............#.#.#..#.##",
    ".###...#.#....#..#.######....###.....#..#...##..##.#....##...#.###....###.",
    ".#.####..#.#.###..###.#..###.#..#..#######....###.......#....###.#...#.###",
    "###.#.###.#..#.#..###.#.....#.##..#.#.####..###...#...#####...####...##...",
    ".#..##..#.##..#..##..######.###.##.....##..#..#.##...####.#...#####..###.#",
    "..##...######.#.#...#.#.#####.##.##...##.##....#.#####...###....#.#.#.#..#",
    "##..#.#.#....##.####.#.##.##.#.#.##......#...##..##...##.#####...#..#..##.",
    "...####.#..###....#.###.#.#.........#....####..#........#.###..####.##...#",
    ".##.##.#####...##.....##.#..#####..##.....#....##......#.#..###..###..##..",
];

const gridInput1 = [
    "....#..",
    "..###.#",
    "#...#.#",
    ".#...##",
    "#.###..",
    "##.#.##",
    ".#..#..",
];

const gridInput2 = [
    ".....",
    "..##.",
    "..#..",
    ".....",
    "..##.",
    ".....",
];

const gridInput3 = [
    "..............",
"..............",
".......#......",
".....###.#....",
"...#...#.#....",
"....#...##....",
"...#.###......",
"...##.#.##....",
"....#..#......",
"..............",
"..............",
"..............",
];

function createGrid(gridInput, buffer) {

    let grid = [];

    const emptyRow = new Array(gridInput[0].length).fill(".");

    // Add buffer rows to the top
    grid.push(...new Array(buffer).fill(0).map(num => [...emptyRow]));

    // Add grid data
    gridInput.forEach(row => grid.push([...row]));

    // Add buffer rows to the bottom
    grid.push(...new Array(buffer).fill(0).map(num => [...emptyRow]));

    const emptyColPadding = new Array(buffer).fill(".");
    grid = grid.map(row => [...emptyColPadding, ...row, ...emptyColPadding]);

    return grid;
}

function createBufferedGrid(grid) { 
    let existsOnEdge = grid[0].find(element => element == "#") // Search top row
                        || grid[grid.length - 1].find(element => element == "#") // Search bottom row
                        || grid.map(row => row[0]).find(element => element == "#") // Search leftmost column
                        || grid.map(row => row[grid[0].length - 1]).find(element => element == "#"); // Search rightmost column
    if (existsOnEdge) {
        return createGrid(grid, 5);
    }
    return grid;
}

function createEmptyMovementGrid(grid, defaultValue) {
    const movementGrid = [];
    for (let row = 0; row < grid.length; row++) {
        const movementGridRow = [];
        for (let col = 0; col < grid[0].length; col++) {
            movementGridRow.push(defaultValue);
        }
        movementGrid.push(movementGridRow);
    }
    return movementGrid;
}

function allSurroundingPositionsFree(grid, currentRow, currentCol) {
    for (let direction of Object.values(DIRECTIONS)) {
        const newRow = currentRow + direction[0];
        const newCol = currentCol + direction[1];
        if (grid[newRow][newCol] == "#") {
            return false;
        }
    }
    return true;
}

function checkSurroundingPositionsFree(grid, currentRow, currentCol, directions) {
    for (let direction of directions) {
        const newRow = currentRow + direction[0];
        const newCol = currentCol + direction[1];
        if (grid[newRow][newCol] == "#") {
            return false;
        }
    }
    return true;
}

function getMovementProposal(grid, movementGrid, movementConsiderations) {
    let newMovementRecorded = false;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == "#") {
                if (checkSurroundingPositionsFree(grid, row, col, Object.values(DIRECTIONS))) {
                    continue;
                } else {
                    for (let movementConsideration of movementConsiderations) {
                        if (checkSurroundingPositionsFree(grid, row, col, movementConsideration)) {
                            movementGrid[row][col] = movementConsideration[0];
                            newMovementRecorded = true;
                            break;
                        }
                    }
                }
            }
        }
    }

    if (newMovementRecorded == false) {
        return null;
    }
    return movementGrid;
}

function moveBasedOnProposal(grid, movementGrid) {
    const claimants = createEmptyMovementGrid(grid, []);

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (movementGrid[row][col][0] == null) {
                continue;
            }
            const newRow = row + movementGrid[row][col][0];
            const newCol = col + movementGrid[row][col][1];

            claimants[newRow][newCol] = [...claimants[newRow][newCol], [row, col]];
        }
    }

    for (let row = 0; row < claimants.length; row++) {
        for (let col = 0; col < claimants[0].length; col++) {
            if (claimants[row][col].length == 1) {
                const claimant = claimants[row][col][0];
                grid[claimant[0]][claimant[1]] = ".";
                grid[row][col] = "#";
            }
        }
    }
    return grid;
}

function rotate(array) {
    const firstElement = array.shift();
    array.push(firstElement);
    return array;
}

function countEmptyGroundTiles(grid) {
    let leftPosition = grid[0].length + 1;
    let rightPosition = -1;
    let topPosition = grid.length + 1;
    let bottomPosition = -1;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == "#") {
                leftPosition = Math.min(leftPosition, col);
                break;
            }
        }
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = grid[0].length - 1; col >= 0; col--) {
            if (grid[row][col] == "#") {
                rightPosition = Math.max(rightPosition, col);
                break;
            }
        }
    }

    for (let col = 0; col < grid[0].length; col++) {
        for (let row = 0; row < grid.length; row++) {
            if (grid[row][col] == "#") {
                topPosition = Math.min(topPosition, row);
                break;
            }
        }
    }

    for (let col = 0; col < grid[0].length; col++) {
        for (let row = grid.length - 1; row >= 0; row--) {
            if (grid[row][col] == "#") {
                bottomPosition = Math.max(bottomPosition, row);
                break;
            }
        }
    }

    let count = 0;
    for (let row = topPosition; row <= bottomPosition; row++) {
        for (let col = leftPosition; col <= rightPosition; col++) {
            if (grid[row][col] == ".") {
                count++;
            }
        }
    }

    return count;
}

function getMovementConsiderations() {
    return [
        [ DIRECTIONS["N"], DIRECTIONS["NE"], DIRECTIONS["NW"] ],
        [ DIRECTIONS["S"], DIRECTIONS["SE"], DIRECTIONS["SW"] ],
        [ DIRECTIONS["W"], DIRECTIONS["NW"], DIRECTIONS["SW"] ],
        [ DIRECTIONS["E"], DIRECTIONS["NE"], DIRECTIONS["SE"] ],
    ];
}
const DIRECTIONS = {
    "N": [-1, 0],
    "S": [1, 0],
    "W": [0, -1],
    "E": [0, 1],
    "NE": [-1, 1],
    "NW": [-1, -1],
    "SE": [1, 1],
    "SW": [1, -1],
};

function part1() {
    let grid = gridInput.map(row => row.split(""));
    let movementConsiderations = getMovementConsiderations();
    for (let loop = 0; loop < 10; loop++) {
        grid = createBufferedGrid(grid);
        let movementGrid = createEmptyMovementGrid(grid, [null, null]);
        movementGrid = getMovementProposal(grid, movementGrid, movementConsiderations);
        grid = moveBasedOnProposal(grid, movementGrid);
        movementConsiderations = rotate(movementConsiderations);
    }

    console.log(countEmptyGroundTiles(grid));
}

function part2() {
    let runCount = 0;

    let grid = gridInput.map(row => row.split(""));
    let movementConsiderations = getMovementConsiderations();

    while (true) {
        grid = createBufferedGrid(grid);
        let movementGrid = createEmptyMovementGrid(grid, [null, null]);
        movementGrid = getMovementProposal(grid, movementGrid, movementConsiderations);
        runCount++;
        if (movementGrid == null) {
            break;
        }
        grid = moveBasedOnProposal(grid, movementGrid);
        movementConsiderations = rotate(movementConsiderations);
    }

    console.log(runCount);
}

// 4116
part1();
// 984
part2();
