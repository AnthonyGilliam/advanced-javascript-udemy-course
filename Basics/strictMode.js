asim = 1

console.log(asim)
// prints: 1

function strict () {
    // Use strict can be placed at the top of a function or at the top of a JS file
    "use strict"
    theVal = 1
    console.log(theVal)
}

strict()
// ReferenceError: theVal is not defined