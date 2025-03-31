// Adding types to Functions -Parameters and returns

//1 here we have the type  in our parameters stating that the data we are 
// expecting will be a string type 
//2 next we have a void type that is what we expect our return type will be 

function printWord (word:string):void{
    console.log(word);
}
printWord("Test")

function sumUp (a:number, b:number):number{
    return a + b;
}

console.log(sumUp(2,2))

// console.log(sumUp(2,"2")) // This will give an error because we are trying
// here we are assign the rest operator a number data type meaning all 
// data that is expected will be numbers 

function makeArray(...n:number[]):number[]{
    return n;
}

console.log(makeArray(1,2,3,4,5))


// now what if we want to use a callback?
// we can use a function as a parameter in another function but how would we define the type 

function calculate(a:number, b:number, calcFn:(a:number, b:number,)=>number){
    return calcFn(a, b)
}

console.log(calculate(3,3,sumUp))

// With out assigning a type for our parameters and our return 
// you will see the args are now type any
function calculate2(a, b, calcFn2){
    return calcFn2(a, b)
}

console.log(calculate2(3,3,sumUp))

function makeFullName(...names:string[]):string{
    return names.join(' ')
}

let testVariable:string

testVariable= makeFullName("Wayel", "Raihan")
console.log(testVariable)


const makeName = (a:string, b:string, fn:(a:string, b:string)=>void)=>{
    fn(a, b)
}

const addNames = (a:string, b:string):void=>{
    console.log(a +" "+ b)
}

makeName("Logan", "Wrights", addNames)


