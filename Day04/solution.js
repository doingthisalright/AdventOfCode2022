const fs = require("fs");

const intervalPairs = fs.readFileSync(`${__dirname}/input`).toString()
                        .split("\n")
                        .map(strategy => strategy.split(","));

function checkIfIntervalSubset(earlyStartInterval, lateStartInterval) {
    // True      |  True        | True      | False       |   False
    // --------- |  ---------   | --------- | ---------   | ---------
    // ----      |  ----------- |     ---   |     ------- |            -------
    if (earlyStartInterval[0] == lateStartInterval[0]) {
        return true;
    } else {
        return earlyStartInterval[1] >= lateStartInterval[1];
    }
}

function checkIfIntervalOverlap(earlyStartInterval, lateStartInterval) {
    // True      |  True        | True      | True        |   False
    // --------- |  ---------   | --------- | ---------   | ---------
    // ----      |  ----------- |     ---   |     ------- |            -------
    return earlyStartInterval[1] >= lateStartInterval[0];
}

function solve(part) {
    let totalConsumingIntervals = 0;

    for (let intervals of intervalPairs) {
        let interval1 = intervals[0].split("-").map(num => +num);
        let interval2 = intervals[1].split("-").map(num => +num);

        if (interval1[0] > interval2[0]) {
            let temp = interval1;
            interval1 = interval2;
            interval2 = temp;
        }

        let result = false;
        if (part == "part1") {
            result = checkIfIntervalSubset(interval1, interval2)
        } else {
            result = checkIfIntervalOverlap(interval1, interval2);
        }

        if (result) {
            totalConsumingIntervals++;
        }
    }
    console.log(totalConsumingIntervals); 
}

// 413
solve("part1");
// 806
solve("part2");

