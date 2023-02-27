# ATEZ Bootcamp

## <a href="https://github.com/Saozcan/atez-bootcamp/tree/main/week1" target="_blank">Week-1</a>

* Değişkenler, while for döngüleri, string fonksiyonları, typeler işlendi.
* Ödev olarak faktoriyel ve sınırsız argüman (variadic) soruları çözüldü.

## <a href="https://github.com/Saozcan/atez-bootcamp/tree/main/week2" target="_blank">Week-2</a>

###### Git

* Git, git içinde kullanılan komutlar.
* feature/<taskname" bug/<taskname"
* git blame <dosya adı" => belirtilen dosyadaki commitleri ve kimler tarafından yapıldığını gösterir.
* git log => geçmişteki commitleri gösterir
  * git log -p komutu ile farklılıkları net görülebilir.
* git diff => webstorm un yaptığını yapıyor bir çeşit. commit sonrası değişiklikleri gösterir.
  * git diff ile farklı branchleleri, commitleri karşılaştırabiliriz.
    * git diff main test

###### Keywords

* Ecmascript,
  * Her sene güncellenen JS standartları, örnek vermek gerekirse ES8 de gelen async/await fonksiyonları.
* Spreadoperator,
  * [x, y, ...z] Array yada objenin geri kalan elemanlarını tutar.
* Optional chaining operator,
  * obje?.name Null gelebilir
* Terary operator,
  * Kısa else if -> number === 10 ? console.log(10) : console.log(0)
* Destructuring,
  * Obje yada array parçalamak için kullanılır. Parçalamaktan kastımız orjinale herhangi bir etkisi yoktur, sadece içinden istenilen çekilir.
* Loopback

###### Destructuring,Class

* Constructor, set get funcs, extends, super.

###### TypeScript

* Kullanmak için npm i -g typescript lomutunu terminalde çalıştırmak gerekiyor. Çalıştırdıktan sonra ts dosyasını js e çeviriyor takibinde js dosyası node ile çalıştırılabilir.
* 3 temel tip var. string, number, boolean. Bunların haricinde any tipini her değişken için kullanabiliriz lakin biz kullanmamaya çalışacağız.
* Obje oluşturmak için interface kullanımı
* diff interface type !!!

```typescript
type TestType = {
  name: string,
}

interface TestInterface {
  name: string,
}

interface  TestInterface {
  id: string,
} // TestInterface = {name: string, id: string}

// If you define interface with same name it will merge them and you can use all of them but
// if you define type with same name it will give an error
 type TestType = {
   id: string,
 }
```

#### Next Week

* Generics and any
* Enums
* Deep Dive Functions
* Deep Dive Inheritance and extends
* Classes
* Architecture filing (Models, enums, classes)
* Hot reload and watching
* Commands

## <a href="https://github.com/Saozcan/atez-bootcamp/tree/main/week3" target="_blank">Week-3</a>

* Start...
