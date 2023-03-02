/**
 * Interface
 * Aynı classlarda olduğu gibi interface içinde gereksiz duplacation olmaması için extends kullanılabilir.
 * Soru işareti olarak verilen değişkenler yani optional olanlar ise interface içinde tanımlanabilir ve kullanılmak zorunda değildir. Diğerleri ilk oluşturulmada zorunda doldurulmalıdır.
 */

interface Animal {
  name: string;
  type: string;
  age: number;
}

interface AnimalTwo {
  tail?: boolean;
}
//"," ile interface'ler birleştirilebilir.
// Sonradanda interface'ler extend edilebilir.
interface Catt extends Animal, AnimalTwo {
  eyeColor?: string;
  wiskers?: boolean;
  sound: () => void;
}
// Birden fazla extend işlemleri yapılabilir. interface tekrardan düzenlene bildiğinden AnimalTwo interface'ini ekleme işlemi yapıldı.
interface Catt extends AnimalTwo {
}
const cat: Catt = {
  name: 'Kedi',
  type: 'Kedi',
  age: 2,
  sound: () => console.log('Miyavv'),
}
const Catt: Catt = {
  name: 'Mavis',
  type: 'Kedi',
  age: 2,
  eyeColor: 'Blue',
  wiskers: true,
  sound: () => console.log('Miyavv içten miyavv'),
}

/**
 * Enums
 * Çok kullanılmıyor. Enum'lar bir obje gibi düşünülebilir. Enum'lar içindeki değerlerin indexleri 0'dan başlar.
 * Aksi durumlarda 0 başlangıç değeri değiştirilebilir. İlk değer 1 olarak tanımlanabilir yada daha farklı bir değer olarak tanımlanabilir.
 */
enum Month {
  January,
  February,
  March,
  April,
}
console.log(Month.January); // 0

enum Color {
  Red= 5,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c); // 6

/**
 * Generic Template Types
 * Verilen tipin özelliklerini otomatik çeker
 */
type AnimalType = {
  name: string;
  type: string;
  age: number;
  sound: () => void;
}
type Sound = {
  soundType: string;
}

function createAnimalSound () {
  return `My sound is `
}






















