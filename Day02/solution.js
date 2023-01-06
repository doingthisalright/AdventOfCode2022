const fs = require("fs");
const guide = fs.readFileSync(`${__dirname}/input`).toString().split("\n").map(strategy => strategy.split(" "));

function part1() {
    const movePoints = {
        "X": 1, // Rock
        "Y": 2, // Paper
        "Z": 3, // Scissor
    }
    const winningMoves = {
        "A": "Y", // Rock loses to Paper
        "B": "Z", // Paper loses to Scissor
        "C": "X", // Scissor loses to Rock
    };
    const drawingMoves = {
        "A": "X", // Both Rock
        "B": "Y", // Both Paper
        "C": "Z", // Both Scissor
    };

    let totalPoints = 0;

    for (let move of guide) {
        const [opponentMove, myMove] = move;
        totalPoints += movePoints[myMove];
        if (winningMoves[opponentMove] === myMove) {
            totalPoints += 6;
        } else if (drawingMoves[opponentMove] === myMove) {
            totalPoints += 3;
        } else {
            totalPoints += 0;
        }
    }

    console.log(totalPoints);
}

function part2() {
    totalPoints = 0;
    const movePoints = {
        "A": 1, // Rock
        "B": 2, // Paper
        "C": 3, // Scissor
    }
    const resultPoints = {
        "X": 0, // Lose
        "Y": 3, // Draw
        "Z": 6, // Win
    }

    const moveCombo = {
        "A": {	// Rock
            "X": "C", // Lose
            "Y": "A", // Draw
            "Z": "B", // Win
        },
        "B": {	// Paper
            "X": "A", // Lose
            "Y": "B", // Draw
            "Z": "C", // Win
        },
        "C": {	// Scissor
            "X": "B", // Lose
            "Y": "C", // Draw
            "Z": "A", // Win
        }
    }
    for (let move of guide) {
        const [opponentMove, result] = move;
        const myMove = moveCombo[opponentMove][result];

        totalPoints += movePoints[myMove];
        totalPoints += resultPoints[result];
    }
    
    console.log(totalPoints);
}

// 12645
part1();
// 11756
part2();