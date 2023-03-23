# LESSON 7 

### JS Decorators

* Dekorator işlemleri ara işlemler gibi çalışıyorlar. Örnek vermek gerekirse

```typescript
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

// Dekore edilecek ?rnek bir s?n?f
class Calculator {
  @logger
  add(a, b) {
    return a + b;
  }
}

// S?n?f? kullanarak ?rnek olu?turma ve metodu kullanma
const calculator = new Calculator();
const result = calculator.add(2, 3);
console.log(result); // ??kt?: 5

```

Üst komut satırında `add` fonkstionu dekoretor ile işlem öncesi başka bir işlem yapılıyor. Böylece araya bir işlem daha girmiş oluyor. Tabi bununda çelitleri var.

```typescript
function classDecorator(target) {
}

function propertyDecorator(target, propertyKey) {
}

function methodDecorator(target, propertyKey, descriptor) {
}

function parameterDecorator(target, propertyKey, parameterIndex) {
}


@classDecorator
class Test {
   @propertyDecorator
   property: string;
   
   @methodDecorator
   method(@parameterDecorator param) {
   
   }
}
```

İlk yazdığımız dekorator'den de görüleceği üzere 3 argüman alınması durumunda methodDecorator olarak geçmektedir. Class için ayrı, property için ayrı decoratorlar oluşturulabilir.

1. Class Decorator: A class decorator is a decorator that is applied to a class declaration. It takes a single parameter, which is the constructor function of the class being decorated. Here is an example:

```typescript
javascript
function myClassDecorator(constructor: Function) {
  console.log("Class is being decorated!");
}

@myClassDecorator
class MyClass {
  // class implementation here
}
```

In this example, the `myClassDecorator` function is a decorator that is applied to the `MyClass` declaration using the `@` syntax. When the class is defined, the decorator function is called with the constructor of the class as its parameter.

1. Method Decorator: A method decorator is a decorator that is applied to a method definition within a class. It takes three parameters: the target object (the class prototype), the property key (the name of the method being decorated), and the property descriptor (an object that describes the method). Here is an example:

```typescript
typescript
function myMethodDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log("Method is being decorated!");
}

class MyClass {
  @myMethodDecorator
  myMethod() {
    // method implementation here
  }
}
```

In this example, the `myMethodDecorator` function is a decorator that is applied to the `myMethod` method of the `MyClass` class using the `@` syntax. When the method is defined, the decorator function is called with the class prototype, the method name, and the method descriptor as its parameters.

1. Property Decorator: A property decorator is a decorator that is applied to a property declaration within a class. It takes two parameters: the target object (the class prototype) and the property key (the name of the property being decorated). Here is an example:

```typescript
typescript
function myPropertyDecorator(target: any, key: string) {
  console.log("Property is being decorated!");
}

class MyClass {
  @myPropertyDecorator
  myProperty: string;
}
```

In this example, the `myPropertyDecorator` function is a decorator that is applied to the `myProperty` property of the `MyClass` class using the `@` syntax. When the property is defined, the decorator function is called with the class prototype and the property name as its parameters.

These are just a few examples of decorators in TypeScript. There are many more types of decorators and use cases.

1. Logging Decorator: A logging decorator can be used to log method calls and their arguments. This is particularly useful for debugging and understanding how code is being executed. Here is an example:

```typescript
typescript
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`Returned value: ${result}`);
    return result;
  }

  return descriptor;
}

class MyClass {
  @log
  myMethod(a: number, b: number) {
    return a + b;
  }
}
```

In this example, the `log` decorator is applied to the `myMethod` method of the `MyClass` class. When the method is called, the decorator logs the method name and arguments, as well as the returned value.

1. Validation Decorator: A validation decorator can be used to validate method arguments before they are passed to the method implementation. This is particularly useful for enforcing business rules and preventing errors. Here is an example:

```typescript
typescript
function validate(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    if (args.length < 2) {
      throw new Error("Invalid arguments");
    }

    const a = args[0];
    const b = args[1];

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Arguments must be numbers");
    }

    return originalMethod.apply(this, args);
  }

  return descriptor;
}

class MyClass {
  @validate
  myMethod(a: number, b: number) {
    return a + b;
  }
}
```

In this example, the `validate` decorator is applied to the `myMethod` method of the `MyClass` class. When the method is called, the decorator validates that the arguments are numbers and that there are at least two arguments. If the arguments are not valid, an error is thrown.

1. Memoization Decorator: A memoization decorator can be used to cache method results so that expensive computations are not repeated unnecessarily. This is particularly useful for functions that are called frequently with the same arguments. Here is an example:

```typescript
typescript
function memoize(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const cache = new Map();

  descriptor.value = function(...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = originalMethod.apply(this, args);
    cache.set(key, result);
    return result;
  }

  return descriptor;
}

class MyClass {
  @memoize
  myMethod(a: number, b: number) {
    console.log("Computing result...");
    return a + b;
  }
}
```

In this example, the `memoize` decorator is applied to the `myMethod` method of the `MyClass` class. When the method is called, the decorator checks if the result has already been computed for the given arguments. If it has, the cached result is returned. If not, the method is called and the result is cached for future calls with the same arguments.

---

### Fonksiyon için harcanan süreyi hesaplama.

```typescript

function logExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Method ${propertyKey} took ${end - start} milliseconds to execute`);
    return result;
  };
  return descriptor;
}

class MyClass {
  @logExecutionTime
  myMethod() {
    // method logic here
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
```

In this example, the `logExecutionTime` function is a decorator that takes three parameters:

- `target`: The class constructor or prototype being decorated.
- `propertyKey`: The name of the method being decorated.
- `descriptor`: An object containing the property descriptor of the method being decorated.

The decorator intercepts the original method and replaces it with a new method that measures its execution time using the `performance.now()` function, logs the result to the console, and returns the original result. When the `myMethod` method of the `MyClass` class is called, it will be wrapped with the `logExecutionTime` decorator and its execution time will be logged to the console.

---

### Propertiler için decorator işlemleri

```typescript
const allowlist = ["Jon", "Jane"];

const allowlistOnly = (target: any, memberName: string) => {
  let currentValue: any = target[memberName];

  Object.defineProperty(target, memberName, {
    set: (newValue: any) => {
      if (!allowlist.includes(newValue)) {
        return;
      }
      currentValue = newValue;
    },
    get: () => currentValue
  });
};

class Person {
  @allowlistOnly
  name: string = "Jon";
}

const person = new Person();
console.log(person.name);

person.name = "Peter";
console.log(person.name);

person.name = "Jane";
console.log(person.name);
```

Object definePropert içinde set ve get işlemleri tutuyor. Burada allowList içindeki değişkenler var ise işlem yapılacak şekilde ayarlanıyor. Class içinde get set işlemleri yapmadan tek bir decorator ile işlemler yapılabilir.

Output

```
Jon
Jon
Jane
```

---

