const fs  = require("fs");

const elfCalories = fs.readFileSync(`${__dirname}/input`).toString().split('\n');

// 1,2,,3,4
const joinedData = elfCalories.join(",");
// ['1,2' , '3, 4']
const splitData = joinedData.split(",,");
// [ [ '1' , '2' ] , [ '3' , '4'] ]
const finalSplitData = splitData.map(item => item.split(","));
// [ [ 1 , 2 ] , [ 3 , 4 ] ]
const finalArray = finalSplitData.map(row => row.map(item => +item));

const sumArray = finalArray.map(row => row.reduce((sum, item) => sum + item, 0));
sumArray.sort((a, b) => {
	return b-a;
});

// Part 1 69206
console.log(sumArray[0]);
// Part 2 197400
console.log(sumArray[0] + sumArray[1] + sumArray[2]);
