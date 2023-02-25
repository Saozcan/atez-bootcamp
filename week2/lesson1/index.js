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


