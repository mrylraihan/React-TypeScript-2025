let numList;
numList = [1,2,3,4];
console.log(numList);
numList = ["A","B","C"];
console.log(numList);
numList = 2
console.log(numList);
numList = "A"
console.log(numList);
// as of now our numList is type any, this isn't good we want to define our variables


let numberList:number[];
numberList = [1,2,3,4];
console.log(numberList)

let wordList:string[];
wordList = ["A","B","C"];
console.log(wordList)

let objList:{name:string , address:string}[];
objList = [
    {name:"Mike", address:"Jersey Street"},
    {name:"Mikey", address:"Brooklyn Street"},
]
console.log(objList)


// we can also use the Array Type with generics
// Usually we wont see this way because its the long way of writing it

let wordList2: Array<string>;

wordList2 = ["One", "Two", "Three"];

console.log(wordList2)