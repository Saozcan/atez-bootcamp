var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Örnek bir decorator fonksiyonu
function logger(target, name, descriptor) {
    var original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Function ".concat(name, " called with arguments ").concat(JSON.stringify(args)));
            var result = original.apply(this, args);
            console.log("Function ".concat(name, " returned ").concat(JSON.stringify(result)));
            return result;
        };
    }
    return descriptor;
}
// Dekore edilecek örnek bir sınıf
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    __decorate([
        logger
    ], Calculator.prototype, "add", null);
    return Calculator;
}());
// Sınıfı kullanarak örnek oluşturma ve metodu kullanma
var calculator = new Calculator();
var result = calculator.add(2, 3);
console.log(result); // Çıktı: 5
// function log(target) {
//   const original = target.prototype.constructor;
//   const newConstructor = function(...args) {
//     console.log(`Creating instance of ${target.name}`);
//     return new original(...args);
//   }
//   target.prototype.constructor = newConstructor;
// }
//
// @log
// class MyClass  {
//   a: number;
//   b: number;
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }
//
// const myObj = new MyClass(1, 2);
//
// function constructor(a: number, b: number) {
//     throw new Error("Function not implemented.");
// }
//# sourceMappingURL=decorators.js.map