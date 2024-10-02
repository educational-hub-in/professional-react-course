// A JavaScript function is a block of code designed to perform a particular task.

// Different types of functions

// 1. Named function
// 2. Anonymous function
// 3. Arrow function
// 4. Immediately Invoked Function Expression (IIFE) ---> NOT RECOMMENDED

// Named function

function greeting(name){
    return `Hello ${name}`
}

const santhosh = greeting("santhosh")
const john = greeting("john")

console.log(santhosh)
console.log(john)

function add(a,b){
    return a+b
}

const onePlusOne = add(1,1)
console.log(onePlusOne)

const multiply  = function (a,b){
    return a*b
}

console.log(multiply(2,2))

const divide = (a, b) => {
    console.log("We are going to divide")

    return a/b
}

console.log(divide(2,1))

