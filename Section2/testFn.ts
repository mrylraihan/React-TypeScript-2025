/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: any) {
	if (typeof padding === 'number') {
		console.log(new Array(5))
		return Array(padding + 1).join(' ') + value
	}
	if (typeof padding === 'string') {
		return padding + value
	}
	throw new Error(`Expected string or number, got '${typeof padding}'.`)
}

let result = padLeft('Hello world', 10) // returns "    Hello world"
console.log(result)


function restParams(...letters:string[]){
	return letters
}

console.log(restParams("w","r","n"))