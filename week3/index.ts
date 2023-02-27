/**
 * Week-3: TypeScript
 *
 * Generic yapı kullanılarak Array oluşturduğumu ve array'in içinde oluşturulan Week3 interface'ini kullanarak
 * bir obje oluşturduğumu varsayarak, week3Array isimli bir array oluşturuldu.
 */
import * as modules from "./testModule";


interface Week3 {
  title: string;
  description: string;
  deadline: Date;
  done: boolean;
}

const week3Array: Array<Week3> = [
  {
    title: "Get to know TypeScript",
    description: "Read the TypeScript documentation",
    deadline: new Date("2020-11-30"),
    done: false,
  },
]


/**
 * Any, generic
 * Gelen her tipi kabul eder, bir çeşit js dünyasına geri dönüş gibi
 * Generic, fonksiyonlarda kullanıldığında, fonksiyonun parametre ve döndürülen değerlerinin tipi belirlenir.
 */
const getAnyArgumentOnly = (arg: any): any => {
  return arg;
}
const getGenericArgumentOnly = <T>(arg: T): T => {
  return arg;
}


/**
 * Enums
 * Enum'lar, bir dizi isimlendirilmiş sabitleri temsil eder.
 * Verilen respond dönen değeri anlamlı hale getirerek, kullanıcak kişi için daha anlaşılır bir hale getirir.
 */
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond("Princess Caroline", UserResponse.Yes);


/**
 * Fonksiyonlar
 * Fonksiyonlar, bir işlevi gerçekleştirmek için bir dizi kodu gruplar.
 * Çeşitleri: Normal, Arrow, Optional, Default, Rest, Overload
 * Normal fonksiyonlar için, parametrelerin tipi ve döndürülen değerin tipi belirtilir.
 * Arrow fonksiyonlar için, parametrelerin tipi belirtilir.
 * Optional fonksiyonlar için, parametrelerin tipi belirtilir ve sonuna ? işareti konur.
 * Default fonksiyonlar için, parametrelerin tipi belirtilir ve sonuna = işareti konur.
 * Rest fonksiyonlar için, parametrelerin tipi belirtilir ve sonuna ... işareti konur.
 * Overload fonksiyonlar için, parametrelerin tipi belirtilir ve sonuna : işareti konur.
 *
 * Arrow ile normal fonksiyon arasındaki fark, arrow fonksiyonun this'ini bind etmemesidir.
 * Normal fonksiyonlar için this, fonksiyonun çağrıldığı yerdeki this'e bağlıdır.
 * Arrow fonksiyonlar için this, fonksiyonun tanımlandığı yerdeki this'e bağlıdır.
 *
 */
function add(x: number, y: number): number {
  return x + y;
}

const addArrow = (x: number, y: number): number => x + y;

function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

function buildNameDefault(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

function buildNameRest(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// function buildNameOverload(firstName: string): string;
// function buildNameOverload(firstName: string, lastName: string): string;

// Farklı argümanlar için farklı fonksiyonlar çalışmaktadır. Bunun gibi durumlar için Generic yapı kullanılabilir.
class Foo {
  constructor(public name: string) {
  };

  myMethod(a: string);
  myMethod(a: number);
  myMethod(a: number, b: string);
  myMethod(a: string | number, b?: string) {
    alert(a.toString());
  }
}


/**
 * Inheritance and extends (bonus super), class
 * Inheritance, bir sınıfın özelliklerini başka bir sınıfa aktarmasıdır.
 * extends, bir sınıfın başka bir sınıftan özelliklerini almasını sağlar.
 * super, bir sınıfın başka bir sınıftan özelliklerini almasını sağlar.
 * class, bir sınıfın özelliklerini tanımlamasını sağlar.
 */

class Animal {
  name: string;
  type: string;

  constructor(theName: string, theType: string) {
    this.name = theName;
    this.type = theType;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, "dog");
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

/**
 * Hot Reload
 * Hot Reload, kodunuzun değişmesi durumunda, tarayıcıda otomatik olarak sayfanın yenilenmesini sağlar.
 */

/**
 * Commands
 * Like you see, commands are very useful. You can use them to run your code, debug, format, and more.
 * Very very useful.
 */


/** Modules
 * Modules, bir dosyadaki kodu başka bir dosyada kullanmamızı sağlar.
 * export, bir dosyadaki kodu başka bir dosyada kullanmamızı sağlar.
 * import, başka bir dosyadaki kodu kullanmamızı sağlar.
 * default, bir dosyadaki kodu başka bir dosyada kullanmamızı sağlar.
 */

export interface Week3Export {
  title: string;
  description: string;
}

module Week3Module {
  export interface Week3Export {
    title: string;
    description: string;
  }

  export function test1() {
    console.log("test1")
  }
}

Week3Module.test1() // cpp dan namespace gibi çalışır


// Import the entire module into a single variable, and use it to access the module exports
// import * as Week3Module from "./Week3Module";
// let week3Module: Week3Module.Week3Export = { title: "Get to know TypeScript", description: "Read the TypeScript documentation" };
// Bütün modülü tek bir değişkene aktarır ve modülün export edilen özelliklerine erişmek için kullanılır.
modules.test2()
modules.default() // default function
modules.test1() // normal export function


/**
 * Implementing Interfaces
 * Bir interface'i implemente etmek, interface'in özelliklerini bir sınıfa aktarmaktır.
 * Bir interface'i implemente etmek için, sınıfın interface'in özelliklerini içermesi gerekir.
 */

interface Week3Interface {
  title: string;
  description: string;
}

class Week3Class implements Week3Interface {
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}






























