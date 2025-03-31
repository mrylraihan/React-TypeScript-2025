// You can create aliases or types for anything 
var add = function (a, b) { return a + b; };
function calculate(a, b, calcFn) {
    return calcFn(a, b);
}
console.log(calculate(2, 3, add));
var ps261 = {
    name: 'ps 261',
    address: '261 7th ave',
    grades: 'K-5'
};
console.log(ps261);
var userId = 3;
console.log(userId);
var namesList = ['Mike', 'Ryan', 'Brian'];
console.log(namesList);
var numberList = [1, 2, 3, 4, 5];
console.log(numberList);
var fullName = function (a, b) { return "".concat(a, " ").concat(b); };
console.log(fullName('Wayel', 'Raihan'));
