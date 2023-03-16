function takeSomeJobAndReturn(job) {
    return job;
}
console.log(typeof takeSomeJobAndReturn(123));
console.log(typeof takeSomeJobAndReturn("123"));
function createAnArrayFromAnArray(items) {
    return new Array().concat(items);
}
var numArray = createAnArrayFromAnArray([200, 300, 400]);
var strArray = createAnArrayFromAnArray(["hello", "world"]);
function getUserInfo(user) {
    console.log("User name is ".concat(user.name));
}
getUserInfo({ name: "Samim", age: 25 });
getUserInfo({ name: "Samim" });
getUserInfo({ name: "Samim", age: 25, job: "Developer" });
//getUserInfo({age: 25, job: "Developer", salary: 1000}); it will give an error because of the U extends {name: string}.
function getUserInfoo(id, name) {
    console.log("".concat(id, " numaral\u0131 kullan\u0131c\u0131n\u0131n ismi ").concat(name));
}
getUserInfoo(1, "Samim");
getUserInfoo("123123", 123);
/**
 * Bir fonksiyona bieden fazla generic type atayabiliriz.
 * Generic tipler tek tip generic tip gibi gerçekleştiği veya çalıştığı durumda altığı değerden başka bir değer alamazken
 * başka bir durumda tekrar çağırıldığında farklı tipler alabilirler.
 */
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var createGenericNumber = new GenericNumber();
var Basket = /** @class */ (function () {
    function Basket() {
        this.data = [];
    }
    Basket.prototype.add = function (item) {
        this.data.push(item);
    };
    Basket.prototype.remove = function (item) {
        // this.data = this.data.filter((i) => i !== item);
        var index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    Basket.prototype.returnArray = function () {
        return this.data;
    };
    return Basket;
}());
// Kalıtım aldığımızı interface içerisinde generic bir tip varsa ve bu bir harf ile isimlendirildi ise
// baska bir instance içerisinde kullanılacağı zaman verilecek olan generic tipi belirten harfin farklı
// bir önemi yoktur, tipi gelecek olan değerini etkilemez.
// Özet olarak T tipi ile oluşturulan Interface'in implement işleminde T yerine U kullanırsak bir şey olmaz
var numbers = new Basket();
numbers.add(11);
numbers.add(22);
numbers.add(2000);
numbers.remove(22);
console.log(numbers.returnArray());
console.log.apply(console, numbers.returnArray()); // spread operator
var users = new Basket();
users.add({
    name: "Samim",
    age: 25,
    email: "",
    id: 1,
    isVerified: true,
    shoppingHistory: {
        item: "Laptop",
        price: 1000,
    }
});
users.returnArray().forEach(function (user) {
    console.log(user.name);
});
//------------------------------------------------------------
var Customer = /** @class */ (function () {
    function Customer(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }
    return Customer;
}());
function logCustomer(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var customer = new Customer("John", "Doe");
logCustomer(customer);
//# sourceMappingURL=index.js.map