
//var, let, const
//Daha çok let ve const kullanılacaktır.

let a = 10;
console.log(typeof a);
console.log(typeof "Ali");
console.log(typeof true);
console.log(typeof undefined);

let b = "Atez"

function random() {
    var abc = 123
}
if (false) {
    var abc = 123
}
random()

console.log(abc);


for (let i = 0; i < 10; i++)
    console.log(i)


arrayTest = ["123", 123, "qweqd", 12356]

arrayTest.map(value => console.log(value))

console.log(arrayTest.find(value => value === 123))

arrayTest.forEach(value => console.log(value))

const newArray = arrayTest.filter(value => typeof value === "number")
console.log(newArray)

let newObject = {
    name: "Ahmet",
    surName: "Talha",
    age: 25
}
console.log(newObject)

let arrays = [newObject, 13, "Ahmedim"]
console.log(arrays)

