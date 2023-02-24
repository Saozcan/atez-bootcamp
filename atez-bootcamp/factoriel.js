
// 1- Faktoriyel
function factoriel(number) {
    let returnNumber = 1;
    if (number === 0)
        return 1;
    if (number < 0) {
        console.log("Lütfen pozitif giriniz.")
        return ;
    }
    if (typeof number === "number") {
        for (let i = 1; i <= number; i++)
            returnNumber *= i;
        return returnNumber;
    }
    else {
        console.log("Lütfen bir sayı girin.")
    }
}

console.log(factoriel(3))
console.log(factoriel(0))
console.log(factoriel(-10))
console.log(factoriel("123"))
