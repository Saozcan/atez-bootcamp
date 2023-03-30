class MethodClass {
  constructor() {
    console.log('started...')
  }

  add (a, b) {
    return a + b;
  }

  anotherMethod (c, d) { // For spy test
    this.greet();
    return this.add(c, d);
  }

  greet () { // For mock test
    return `Hello World`;
  }

  promiseTestCase () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3), 3000;
      })
    }).then((data) => {
      return data * 3;
    })
  }
}

module.exports = MethodClass;
