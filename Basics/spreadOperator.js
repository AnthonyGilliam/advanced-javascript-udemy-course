let ar1 = [ 4, 5, 6 ]
// The spread operator extrapolates an array into one or more single variables, parameters, or array elements
let ar2 = [ 1, 2, 3, ...ar1 ]
console.log(ar2)
// prints: [ 1, 2, 3, 4, 5, 6 ]

let ar3 = [ 'a', 'b', 'c', [ 1, 2, 3 ], { foo: 'bar', baz: { moo: 'too' } }]
// If the spread operator is called on an array inside of an empty array, it creates a deep copy of the spread array
//into a new variable
let ar4 = [ ...ar3 ]
console.log(ar4)
// prints: [ 'a', 'b', 'c', [ 1, 2, 3 ], { foo: 'bar', baz: { moo: 'too' } } ]
console.log(ar3 == ar4)
// prints: false

let media = 'twitter'
let creds = ['key', 'callbackUrl']
function login(method, ...options) {
    console.log(`method: ${method}`)
    console.log(`options: ${options}`)
}
// The spread operator can be used to pass an array into a function containing a rest operator parameter
login(media, ...creds)