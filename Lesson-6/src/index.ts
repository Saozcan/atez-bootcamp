function takeSomeJobAndReturn<J>(job: J): J {
  return job;
}

console.log(typeof takeSomeJobAndReturn(123));
console.log(typeof takeSomeJobAndReturn("123"));


function createAnArrayFromAnArray<A>(items: A[]): A[] {
  return new Array<A>().concat(items);
}

let numArray = createAnArrayFromAnArray([200, 300, 400]);
let strArray = createAnArrayFromAnArray(["hello", "world"]);

function getUserInfo<U extends { name: string }>(user: U): void { // U extends {name: string} -> U must have a name property.
  console.log(`User name is ${user.name}`);
}

getUserInfo({name: "Samim", age: 25});
getUserInfo({name: "Samim"});
getUserInfo({name: "Samim", age: 25, job: "Developer"});

//getUserInfo({age: 25, job: "Developer", salary: 1000}); it will give an error because of the U extends {name: string}.

function getUserInfoo<U, I>(id: U, name: I): void {
  console.log(`${id} numaralı kullanıcının ismi ${name}`);
}

getUserInfoo(1, "Samim");
getUserInfoo("123123", 123);

/**
 * Bir fonksiyona bieden fazla generic type atayabiliriz.
 * Generic tipler tek tip generic tip gibi gerçekleştiği veya çalıştığı durumda altığı değerden başka bir değer alamazken
 * başka bir durumda tekrar çağırıldığında farklı tipler alabilirler.
 */

class GenericNumber<T> {
  startingPoint: T;
  add: (x: T, y: T) => T;
}

let createGenericNumber = new GenericNumber<number>();

//------------------------------------------------------------

interface IShoppingHistory {
  item: string;
  price: number;
}

interface IUser {
  name: string;
  age: number;
  email: string;
  id: number | string;
  isVerified: boolean;
  shoppingHistory: IShoppingHistory;
}

interface ICollection<T> {
  add: (item: T) => void;
  remove: (item: T) => void;
  returnArray: () => T[];
}

class Basket<U> implements ICollection<U> {
  data: U[] = [];
  add(item: U): void {
    this.data.push(item);
  }
  remove(item: U): void {
    // this.data = this.data.filter((i) => i !== item);
    let index = this.data.indexOf(item);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }
  returnArray(): U[] {
    return this.data;
  }
}

// Kalıtım aldığımızı interface içerisinde generic bir tip varsa ve bu bir harf ile isimlendirildi ise
// baska bir instance içerisinde kullanılacağı zaman verilecek olan generic tipi belirten harfin farklı
// bir önemi yoktur, tipi gelecek olan değerini etkilemez.

// Özet olarak T tipi ile oluşturulan Interface'in implement işleminde T yerine U kullanırsak bir şey olmaz

let numbers: ICollection<number> = new Basket();
numbers.add(11);
numbers.add(22);
numbers.add(2000);
numbers.remove(22);
console.log(numbers.returnArray());
console.log(...numbers.returnArray()); // spread operator

let users: ICollection<IUser> = new Basket();
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
users.returnArray().forEach((user) => {
  console.log(user.name);
})


//------------------------------------------------------------

class Customer {
  firstName: string;
  lastName: string;

  constructor(name: string, surname: string) {
    this.firstName = name;
    this.lastName = surname;
  }
}

function logCustomer<T extends Customer> (person: T): void { // T extends Customer -> T must be a Customer.
  console.log(`${person.firstName} ${person.lastName}`);
}

let customer = new Customer("John", "Doe");
logCustomer(customer);

class FirstCustomer extends Customer {
  age: number;
  constructor(name: string, surname: string, age: number) { // age property is not in Customer class.
    super(name, surname); // super() must be called before this.
    this.age = age;
  }
}

//------------------------------------------------------------

interface Pair<T, U> {
  first: T;
  second: U;
}

let value: Pair<number, string> = {
  first: 1,
  second: "hello"
}

interface Command<T, R> {
  jobId: T;
  run(value: T): R;
}

let command: Command<number, string> = {
  jobId: 1,
  run(value: number): string {
    return value.toString();
  }
}














