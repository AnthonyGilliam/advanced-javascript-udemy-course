"use strict"

let a = {}
function foo(a) {
// If an object variable is passed into a function as a parameter and the function changes the value of one of its
//properties, the value of the property of the referenced object outside the scope of the function is also changed
    a.moo = false
}
foo(a)
console.log(a)
// prints: { moo: false }

let b = { 'foo': 'bar' }
function bar(b) {
// If an object variable is passed into a function as a parameter and the function reassigns the parameter to another
//object, the value of referenced object outside the scope of the function does NOT change
    b = { 'moo': 'too' }
}
bar(b)
console.log(b)
// prints: { foo: 'bar' }