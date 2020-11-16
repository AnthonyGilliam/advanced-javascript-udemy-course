"use strict"

let a = 1
function foo(a) {
// If a primitive type variables is passed into a function as a parameter and the function changes the value of that
//parameter, the value of the passed in variable outside the scope of the function is unchanged
    a = 2
}
foo(a)
console.log(a)
// prints: 1