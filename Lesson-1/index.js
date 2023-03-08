
//string data type
var sth = "ATEZ BOOTCAMP"

//number data type
var number = 123

//boolean data type
var boolean = true

var boolean2 = false

var objectTest = {
    name: "ATEZ",
    age: 20,
    isStudent: true
}

console.log(objectTest)

//array data type
var arrayTest = ["ATEZ", 20, true]

console.log(arrayTest)

//undefined data type
var undefinedTest

console.log(undefinedTest)

//null data type
var nullTest = null

console.log(nullTest)

//typeof operator
console.log(typeof sth)
console.log(typeof number)
console.log(typeof boolean)
console.log(typeof boolean2)
console.log(typeof objectTest)
console.log(typeof arrayTest)
console.log(typeof undefinedTest)
console.log(typeof nullTest)

//string concatenation
var firstName = "ATEZ"
var lastName = "BOOTCAMP"

console.log(firstName + " " + lastName)

//string length
console.log(firstName.length)

//string to uppercase
console.log(firstName.toUpperCase())

//string to lowercase
console.log(firstName.toLowerCase())

//string index
console.log(firstName[0])

//string index of
console.log(firstName.indexOf("A"))
console.log(firstName.indexOf("Z"))

//string slice
console.log(firstName.slice(0, 2))

//string replace
console.log(firstName.replace("ATEZ", "ATEZ BOOTCAMP"))

//string split
console.log(firstName.split(""))
console.log(firstName.split("A"))

//number to string
var number = 123
console.log(number.toString())

//number to fixed
var number = 123.456
console.log(number.toFixed(2))

//number to precision
var number = 123.456
console.log(number.toPrecision(2))

//number to exponential
var number = 123.456
console.log(number.toExponential(2))

if(true){
    var a = 1
}
console.log(a)

const returnSomething = (a, b) => a + b

console.log(returnSomething(1, 2))
console.log(returnSomething(1, "2"))
console.log(returnSomething(1, "abc"))
console.log(returnSomething(true, "abc"))
console.log(typeof returnSomething(1, "abc"))
console.log(typeof undefined)
console.log(typeof null)
console.log(returnSomething(true, 1))
console.log(returnSomething(true, "1"))
console.log(returnSomething({}, {}))

function sum(a, b){
    return a + b
}
function minus(a, b){
    return a - b
}

function calculator(a, b, operator){
    return operator(a, b)
}

function times(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

array = [
    {name: "ATEZ", age: 20},
    {name: "ATEZ BOOTCAMP", age: 20},
    {name: "ATEZ BOOTCAMP 2020", age: 20},
    {name: "ATEZ BOOTCAMP 2022", age: 20},
]

array.forEach((item, index) => { console.log(item.name) })

array.forEach((item, index) => { console.log(item.age) })

array.forEach((item, index) => { console.log(item) })

array.forEach((item, index) => { console.log(index) })

for( let data in array[0]){
    console.log(array[0][data])
}

for( let data in array[1]){
    console.log(array[1][data])
}


function sumNumbers(...numbers){
    let sum = 0
    numbers.forEach((item, index) => {
        sum += item
    })
    return sum
}

console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

function atoi(str){
    return parseInt(str)
}

function atof(str){
    return parseFloat(str)
}

function itoa(int){
    return int.toString()
}

function ftoa(float){
    return float.toString()
}

function getAge(birthYear){
    return 2020 - birthYear
}

function getAge123(birthYear, currentYear){
    return currentYear - birthYear
}

