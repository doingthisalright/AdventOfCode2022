const fs = require("fs");
const rucksacks = fs.readFileSync(`${__dirname}/input`).toString().split("\n");

const a_charCode = "a".charCodeAt(0);
const A_charCode = "A".charCodeAt(0);
const z_charCode = "z".charCodeAt(0);

function getRepeatedCharacterAcrossAllItems(items) {
	const charCount = {};

	for (let item of items) {
		const uniqueChars = new Set(item.split(""));
		for (let char of uniqueChars) {
			if (!charCount[char]) {
				charCount[char] = 0;
			}
			charCount[char]++;

			if (charCount[char] === items.length) {
				return char;
			}
		}
	}

	return undefined;
}

function getRepeatedCharacter(item1, item2) {
	const uniqueCharsItem1 = new Set(item1.split(""));
	const uniqueCharsItem2 = new Set(item2.split(""));

	for (let item of uniqueCharsItem2) {
		if (uniqueCharsItem1.has(item)) {
			return item;
		}
	}

	return undefined;
}

function getPriority(char) {
	const charCode = char.charCodeAt(0);
	if (charCode >= a_charCode && charCode <= z_charCode) {
		return charCode - a_charCode + 1;
	} else {
		return 26 + charCode - A_charCode + 1;
	}
}

let totalPriority = 0;

function part1() {
    totalPriority = 0;
    for (let rucksack of rucksacks) {
        const compartmentSize = rucksack.length/2;
        const items1 = rucksack.substring(0, compartmentSize);
        const items2 = rucksack.substring(compartmentSize);
    
        const repeatedChar = getRepeatedCharacter(items1, items2);
    
        const priority = getPriority(repeatedChar);
    
        totalPriority += priority;
    }
    console.log(totalPriority);
}

function part2() {
    totalPriority = 0;
    for (let loop = 0; loop < rucksacks.length; loop += 3) {
        const rucksacksGroup = [
            rucksacks[loop],
            rucksacks[loop + 1],
            rucksacks[loop + 2]
        ];
    
        const repeatedChar = getRepeatedCharacterAcrossAllItems(rucksacksGroup);
    
        const priority = getPriority(repeatedChar);
    
        totalPriority += priority;
    }
    console.log(totalPriority);
}

// 8153
part1();
// 2342
part2();