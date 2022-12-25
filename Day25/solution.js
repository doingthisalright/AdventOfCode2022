const fs  = require("fs");

function decimalToSnafu(decimal) {
    snafu = "";
    do  {
        const remainder = decimal % 5;
        switch (remainder) {
            case 0:
            case 1:
            case 2:
                snafu = remainder + snafu;
                break;
            case 3:
                snafu = "=" + snafu;
                decimal += 5;
                break;
            case 4:
                snafu = "-" + snafu;
                decimal += 5;
                break;
        }

        decimal = parseInt(decimal/5);
    } while(decimal !== 0);
    return snafu;
}

function snafuToDecimal(snafuNum) {
    const snafuDigits = snafuNum.split("");
    snafuDigits.reverse();

    let decimal = 0;
    let currentMultiplier = 1;
    for (let snafuDigit of snafuDigits) {
        let val = 0;
        if (snafuDigit == "-") {
            val = -1;
        } else if (snafuDigit == "=") {
            val = -2;
        } else {
            val = +snafuDigit;
        }
        decimal += val * currentMultiplier;
        currentMultiplier *= 5;   
    }

    return decimal;
}

function solve(part) {
    const snafuInput = fs.readFileSync(`${__dirname}/input`).toString().split('\n');

    let totalSum = 0;
    for (let snafuNum of snafuInput) {
        totalSum += snafuToDecimal(snafuNum);
    }

    if (part == "part1") {
        console.log(decimalToSnafu(totalSum));
    }

    if (part == "part2") {
        console.log("MERRY CHRISTMAS and HAPPY NEW YEAR!");
    }
}

// 2-0==21--=0==2201==2
solve("part1");
// MERRY CHRISTMAS and HAPPY NEW YEAR!
solve("part2");