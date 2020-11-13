// New line characters are captured as they are in a template string
let msg = `hello
world's
my
name
is
Anthony`
console.log(msg)
// prints:
// hello
// world's
// my
// name
// is
// Anthony

let isBold = true
// Use the syntax ${var} to place a javascript expression inside a template string
let msg2 = `Hello world my name is ${isBold ? "<b>Anthony</b>" : "Anthony"}`
console.log(msg2)

function h1(strings, ...vars) {
// The first argument to a template tag handler function is an array of strings representing the first string and all
//strings proceeding a string template variable including an empty string at the end if the end of the template is a
//string variable
    console.log(strings)
// The second and proceeding parameters are all the template variables of the string template passed in one-by-one
    if (vars?.length) {
        console.log(vars)
        let varCnt = 0
        let result = strings.reduce((temp, str) => {
            temp = temp + str + (vars[varCnt++] ?? '')
            return temp
        } , '')
        return  result
    }
    return `<h1>${strings}</h1>`
}
//A Template Tag is placed before a string template and allows the string template to be passed into a function
console.log(h1`Anthony`)
// prints: <h1>Anthony</h1>

let name = 'Anthony'
let place = 'world'
console.log(h1`Hello ${place}, my name is ${name}`)
// prints: <h1>Hello ,, my name is ,</h1>