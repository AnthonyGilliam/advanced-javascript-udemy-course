// There are 5 primitive types in Javascript:
// Boolean
// Number
// String
// Null
// Undefined

// There is 1 non-primitive types in Javascript:
// Object

// Use the typeof() function to
console.log(typeof(3))
// prints: number
// The typeof function can also be called without parenthesis
console.log(typeof 'Hello World')
// prints: string

// There is a BUG in Javascript where typeof(null) returns "object" instead of the Null type
console.log(typeof null)
// prints: object

// Javascript is a dynamically typed language whereas the type of a variable can be changed by assigning it values of
//different types
let a = 'moo'
console.log(typeof a)
// prints: string
a = 1
console.log(typeof a)
// prints: number

// When comparing null to undefined with double equal sign (loose equality), the answer is true
console.log(null == undefined)
// prints: true
// When comparing null to undefined with triple equal sign (strict equality), the answer is fale
console.log(null === undefined)
// prints: false

// For some reason, Javascript resolves this value to true
console.log(0 == '')
// prints: true

// Javascript attempts to coerce a string to a bool before loosely comparing
// Number coercion takes precedence over string coercion; true and false can be converted to numbers so Number type is
//used when comparing them
// Number(false) == 0
console.log(false == 'false')
// prints: false
console.log(Number(false))
// prints: 0
console.log(Number('false'))
// prints: NaN
console.log(true == 'true')
// prints: false
console.log(Number(true))
// prints: 1
console.log(Number('true'))
// prints: NaN

// NaN is used when an expression tries to coerce a non-number value to a number
console.log('abc'/4)
// prints: NaN

// NaN (Not a Number) compared ANY value, even itself, is always false
console.log(NaN == 1)
// prints: false
console.log(NaN == 'a')
// prints: false
console.log(NaN == NaN)
// prints: false
console.log(NaN === NaN)
// prints: false

// Use the isNaN() function to check if a value is NaN
console.log(isNaN(1))
// prints: false
// isNaN() attempts to coerce the value passed into to a number before returning its value
console.log(isNaN('1'))
// prints: false
console.log(isNaN('a'))
// prints: true

// To check if a value is NaN, strictly compare the value to itself; ONLY if the value equals NaN will the expression
//resolve to false
let b = NaN
console.log(b === b)
