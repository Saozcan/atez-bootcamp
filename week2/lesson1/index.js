// Önceki derslerde öğrendiğimiz konuları kullanarak
// infinity kullanımı

const calculateFactorial = (number) => {
  if (number === 0) {
    return 1
  } else if (number < 0) {
    return "Please enter a positive number"
  } else if (number === Infinity || typeof number !== "number") {
    return "Please enter a number"
  } else {
    for (let i = number - 1; i > 0; i--) {
      number = number * i
    }
  }
  return number
}

console.log(calculateFactorial(Infinity))
console.log(calculateFactorial(5))
console.log(calculateFactorial(-5))
console.log(calculateFactorial(0))
console.log(calculateFactorial("5"))
console.log(calculateFactorial(1.5))




// homework-2
const calculateArguments = (...args) => {
  const numberArray = args.filter((value) => typeof value === "number")
  return numberArray.reduce((a, b) => a * b)
}
// reduce kullanımı ile beraber.
console.log(calculateArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(calculateArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a"))
console.log(calculateArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", Infinity))
console.log(calculateArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", Infinity, -1))
console.log(calculateArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", Infinity, -1, 0))

//spread operator
const calculateNumbers = (x, y, z) => {
  return x * y * z
}
const numbers = [1, 2, 3]
console.log(calculateNumbers(...numbers)) // spread operator Bütün elemanları tek tek alır.

const carObject = {
  id: 1,
  model: "seat",
  color: "red",
}
const carObject2 = {
  ...carObject,
  wheel: 4,
  maxSpeed: 200,
}

console.log(carObject2)
const spreadArray = [ 4, 5, 6, 7, 8]
console.log(...spreadArray) // looks like print(4, 5, 6, 7, 8)


//Array Destructuring
const [x, y, ...z] = spreadArray
console.log("-------------------")
for (let i = 0; i < z.length; i++) {
  console.log(z[i])
}
console.log("-------------------")

console.log(x)
console.log(y)
console.log(z)
console.log(...z)

//Object Destructuring
const {maxSpeed, ...rest} = carObject2
console.log(maxSpeed)
console.log(rest)
//console.log(...rest) it will not work


//Optional Chaining Operator
const carObject3 = {
  ...carObject2,
  //speedInterval: [10, 20],
}
//console.log(carObject3.speedInterval.forEach((value) => console.log(value))) // it will not work
console.log(carObject3?.speedInterval?.forEach((value) => console.log(value))) // ?. optional chaining operator (null check)
// varsa çalıştır yoksa çalıştırma "?"


//Terary Operator
const age = 18
const isAdult = age >= 18 ? true : false
console.log(isAdult)

console.log(carObject.color === "red" ? "Araba kırmızı" : "Araba kırmızı değil")

console.log(carObject.speedInterval || "0") //


