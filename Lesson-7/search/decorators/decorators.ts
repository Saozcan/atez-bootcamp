
// Örnek bir decorator fonksiyonu
function logger(target, name, descriptor) {
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      console.log(`Function ${name} called with arguments ${JSON.stringify(args)}`);
      const result = original.apply(this, args);
      console.log(`Function ${name} returned ${JSON.stringify(result)}`);
      return result;
    }
  }
  return descriptor;
}

// Dekore edilecek örnek bir sınıf
class Calculator {
  @logger
  add(a, b) {
    return a + b;
  }
}

// Sınıfı kullanarak örnek oluşturma ve metodu kullanma
const calculator = new Calculator();
const result = calculator.add(2, 3);
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
