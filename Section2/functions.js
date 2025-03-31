// Adding types to Functions -Parameters and returns
//1 here we have the type  in our parameters stating that the data we are 
// expecting will be a string type 
//2 next we have a void type that is what we expect our return type will be 
function printWord(word) {
    console.log(word);
}
printWord("Test");
function sumUp(a, b) {
    return a + b;
}
console.log(sumUp(2, 2));
// console.log(sumUp(2,"2")) // This will give an error because we are trying
// here we are assign the rest operator a number data type meaning all 
// data that is expected will be numbers 
function makeArray() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n;
}
console.log(makeArray(1, 2, 3, 4, 5));
// now what if we want to use a callback?
// we can use a function as a parameter in another function but how would we define the type 
function calculate(a, b, calcFn) {
    return calcFn(a, b);
}
console.log(calculate(3, 3, sumUp));
// With out assigning a type for our parameters and our return 
// you will see the args are now type any
function calculate2(a, b, calcFn2) {
    return calcFn2(a, b);
}
console.log(calculate2(3, 3, sumUp));
function makeFullName() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names.join(' ');
}
var testVariable;
testVariable = makeFullName("Wayel", "Raihan");
console.log(testVariable);
var makeName = function (a, b, fn) {
    fn(a, b);
};
var addNames = function (a, b) {
    console.log(a + " " + b);
};
makeName("Logan", "Wrights", addNames);
