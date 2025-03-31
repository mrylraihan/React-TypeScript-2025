var numList;
numList = [1, 2, 3, 4];
console.log(numList);
numList = ["A", "B", "C"];
console.log(numList);
numList = 2;
console.log(numList);
numList = "A";
console.log(numList);
// as of now our numList is type any, this isn't good we want to define our variables
var numberList;
numberList = [1, 2, 3, 4];
console.log(numberList);
var wordList;
wordList = ["A", "B", "C"];
console.log(wordList);
var objList;
objList = [
    { name: "Mike", address: "Jersey Street" },
    { name: "Mikey", address: "Brooklyn Street" },
];
console.log(objList);
// we can also use the Array Type with generics
// Usually we wont see this way because its the long way of writing it
var wordList2;
wordList2 = ["One", "Two", "Three"];
console.log(wordList2);
