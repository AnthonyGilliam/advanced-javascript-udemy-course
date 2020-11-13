function sum(a, b) {
// Javascript ignores extra parameters
    return a + b
}
console.log(sum(1, 2, 3, 4))
// prints: 3

function sum2(...nums) {
    return nums.reduce((sum, num) => num + sum, 0)
}
console.log(sum2(1, 2, 3, 4))
// prints: 10

function login(method, ...options) {
    console.log(`method: ${method}`)
    console.log(`options: ${options}`)
}
login('facebook', 1, 2, 3, 4)
