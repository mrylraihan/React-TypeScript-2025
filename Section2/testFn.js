/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        console.log(new Array(5));
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(typeof padding, "'."));
}
var result = padLeft('Hello world', 10); // returns "    Hello world"
console.log(result);
function restParams() {
    var letters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letters[_i] = arguments[_i];
    }
    return letters;
}
console.log(restParams("w", "r", "n"));
