// 2- Variadic
function variadicSum(...numbers) {
    let returnSum = 0;
    for (let number of numbers) {
        if (typeof number !== 'number') {
            console.log("Lütfen sayı giriniz.")
            return "Lütfen Sayı Giriniz.";
        }
        returnSum += number;
    }
    return returnSum;
}

console.log(variadicSum(13, 123, 23, 667, 1234, 1))
console.log(variadicSum(13, "123", 23, 667, 1234, 1))
console.log(variadicSum())
