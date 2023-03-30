const MethodClass = require('../src/index.js');
const expect = require('chai').expect;
const sinon = require('sinon');

const newObject = new MethodClass();

describe.skip('MethodClass Test Suit', () => {
  it('Test the Add method', () => {
    expect(newObject.add(1, 2)).to.be.equal(3);
  });

  //spy - mock - stub
  it("Should spy the add method", () => {
    const spy = sinon.spy(newObject, "add");
    const arg1 = 10;
    const arg2 = 20;

    newObject.anotherMethod(arg1, arg2);
    expect(spy.calledWith(arg1, arg2)).to.be.true;
    // exports(spy.calledOnce).to.be.true;
    //exports(spy.calledTwice).to.be.true; iki kere kullanmadığımızdan hata dönecektir.
  })

  it("Should mock the greet func", () => {
    const mock = sinon.mock(newObject);
    const expectation = mock.expects("greet");
    expectation.exactly(1);
    newObject.anotherMethod(10, 20);
    expectation.withArgs().returns("Hello World");
    expectation.verify();
  })
})


describe.skip("Test Suit For Stub", () => {
  it('should stub add Method', function() {
    const stub = sinon.stub(newObject, "add");
    stub.withArgs(10, 20).returns(100);
    expect(newObject.anotherMethod(10, 20))
      .to
      .be
      .equal(1000);
  });
})

describe("Promise Test suit", () => {
  it("should test promise", () => {
    newObject.promiseTestCase()
      .then((data) => {
        expect(data).to.be.equal(9);
    })
  })
});
