
export function test1() {
  console.log("test1");
}

export function test2() {
  console.log("test2");
}

function test3() {
  console.log("test3");
}

function test4() {
  console.log("test4");
}

export { test4 };
export default test3;


function sum<T>(a: T): T {
  return a;
}
function sum2(a: any): any {
  return a;
}
console.log(typeof sum(1));


const testTakeFunction = (
  func: () => boolean,
  func2: (a: number) => number,
  func3: (a: number, b: number) => number,
) => {
  console.log(func());
  console.log(func2(1));
  console.log(func3(1, 2));
}

const testObject = {
  test1: () => true,
  test2: (a: number) => a,
  test3: (a: number, b: number) => a + b,
  title: "test",
  description: "test",

}

const { title, description } = testObject;
console.log(title, description);
console.log(testObject.title, testObject.description);


