function foo(a, b) {
// The arguments object is native to javascript and it holds all the parameters passed into a function (declared and
//non-declared)
    console.log(arguments)
    // prints: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
//
}
let a = 1
let b = 2
console.log(foo(a, b, 3, 4))
