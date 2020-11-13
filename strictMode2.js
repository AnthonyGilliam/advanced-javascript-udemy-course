"use strict"

var let = 1
// SyntaxError: Unexpected strict mode reserved word

var foo = 1
delete foo
// SyntaxError: Delete of an unqualified identifier in strict mode.

function moo () {}
delete moo
// SyntaxError: Delete of an unqualified identifier in strict mode.

function boo (bar) {
    delete bar
// SyntaxError: Delete of an unqualified identifier in strict mode.
}

var eval = 1
// SyntaxError: Unexpected eval or arguments in strict mode

eval("var a = 1")
console.log(a)
// ReferenceError: a is not defined

