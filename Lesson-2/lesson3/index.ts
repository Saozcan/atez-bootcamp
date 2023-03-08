const abc = "Hello World" // Type: string

const number = 10 // Type: number

const isTrue = true // Type: boolean

let stringVal: string = "String value"
let numberVal: number = 10
let booleanVal: boolean = true
// any type
let anyUnknownVal: any;
anyUnknownVal = "String value"
anyUnknownVal = 10
anyUnknownVal = true
anyUnknownVal = {
  name: "Aldığı değerin önemi yok",
}

let numbers: number[];
let strings: string[];

//numbers = ["Ahmet"] it will give an error
numbers = [1, 2, 3, 4, 5]

//strings = [1, 2, 3] it will give an error
strings = ["Ahmet", "Mehmet", "Ali"]


function userLogin(email: string, password: string): string {
  console.log(`Name: ${email}, Age: ${password}`)
  return email + password
}

userLogin("blabla@bla.com", "123456")



function userLoginWithOr(email: string, password: string | number): string { // password can be string or number and you have to return only string
  //password.split(" ") // it will give an error because password can be number
  typeof password === "string" && password.toUpperCase()
  console.log(`Name: ${email}, Age: ${password}`)
  return email + password
}

userLoginWithOr("blabla@blac.com", 123123)


const Anmimal = {
  name: "Java",
  type: "Persian",
  age: 2,
}

function createCatUser(cat: { name: string, type: string, age: number }) {
  return `Name: ${cat.name}, Type: ${cat.type}, Age: ${cat.age}`
}

console.log(createCatUser(Anmimal))

interface Animal {
  name: string,
  type: string,
  age: number
  eyeColor?: string // optional
  // wisher?: (name: string) => string // optional
}

const Java : Animal = {
  name: "Java",
  type: "Persian",
  age: 2,
  eyeColor: "Blue"
  //color: "Blue" // it will give an error because color is not defined in interface
}

// type Java = {
//   name: string,
//   type: string,
//   age: number
// } // it is same with interface but it is not reusable

type TestType = {
  name: string,
}

interface TestInterface {
  name: string,
}

interface  TestInterface {
  id: string,
}

// If you define interface with same name it will merge them and you can use all of them but
// if you define type with same name it will give an error
// type TestType = {
//   id: string,
// }







