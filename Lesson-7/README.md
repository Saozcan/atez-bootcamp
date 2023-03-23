# Lesson-7

## Dependency Injection

### WHY DI

* Seperation of concern
* Reusability.
* TESTING (TDD - Test Driven Development)

### WHY NOT

* Gereksiz kaldığı durumlar olabilir ve bu sebepten işi uzatabilir.
* Bazen sadece çok basit bir yapıyı bir servis dışına taşımaya neden olabilir.
* Logic (isin zekası) servisin dışında daha zor kontrol edilebilecek bir yere taşınabilir.

## Loopback

* Loopback be framework

* Express üzerine kurulmuştur.

* SOAP or REST services.

* `lb4` komutu ile app oluşturulabilir.

* Loopback otomatik swagger sağlıyor

* .../explorer

* controller

  * end pointlerin yazıldığı kısım
  * Request - Response yaşam döngümüzü yöneten katmandır.
  * Controller içinde yazılan her fonksiyon ayrı ayrı requestleri karşılayacak şekilde yazılır. Ex. POST, GET vs gibi ve buna göre logic çalışıp bir yanıt döner.

* model

  * business domain object yapısının tanımlandığı kısımdır.

  * Datanin şeklini tanımlar `Customer Address  Order

  * CRUD gibi davranişlar repositoryler tarafından eklenir.

  * TYPES OF MODEL DOMAIN OBJECT

  * Value Object: Identity barındırmayan object

  * ```typescript
    {
        "name": "Address",
        "properties": {
            "streetNum": "number",
                ...
        }
    }
    ```

  * Entity Object: ID barındıran bir object

  * ```typescript
    {
        "name": "Address",
        "properties": {
            "streetNum": "number",
            "address": "Adress" <--
        }
    }
    ```

* datasources

  * `lb4 datasource` komutu ile oluşturulur.
  * dosya dizini verilir
  * verilen dizinde dosya oluşturulur

  Repository ; modellere crud davranısı kattığımız katman diyebiliriz

  * `lb4 repository`

  * Bir Repository strongly-typed data erisimini sağlayan bir servistir
  * CRUD işlemleri her ne kadar controller içinde yapılsada, repository kısmında gerçekleştirilir.

## Search 

* JS Decorators

* Mocha Testing Library. Testing libraries jest, mocha, coveralls, coverage, karma

* Express

* OpenAPI standartları

* Loopback -> docs

* Loopback -> docs -> concepts !

* Loopback api docs -> packages

* controller içinde `@inject` (DI)

*  loopback -> model kısmı (yukarıda anlatılan kısımlar)

* juggler (bir sonraki derste sorulacak)

* HTTP Methods (GET, POST, PUT, PATCH, DELETE, PUT)

  ```
  PUT is a technique of altering resources when the client transmits data that revamps the whole resource. PATCH is a technique for transforming the resources when the client transmits partial data that will be updated without changing the whole data.
  ```





## Notes

* ES5
* object_prototypes
* backbonjs
* js engine - v8
* meteor js
* jsbin internet text editor not important
* 