# 4. Dersin Araştırma Ödevi

## Regex

* Genel olarak çoğu dilde kullanılmaktadır. Uzun, kısa fark etmeksizin string içinde aramalarda hayat kurtarır. Genel olarak daha çok wildcard "*" çok kullanmaktayım, özellikle shell'de dosyaları aramada, silmede vb. işlemlerde çok kullanışlıdır.

```bash
echo pack*
package-lock.json package.json
```

```
    . means “any single character” except newline
    * zero or more of the preceding match
    + one or more of the preceding match
    [abc] any one character of a, b, and c
    (RX1|RX2) either something that matches RX1 or RX2
    ^ the start of the line
    $ the end of the line
```


## HTTP Status Codes

* Yapılan isteklerin geri dönüş kodlarıdır. Genel olarak istemci ile sunucu arasındaki iletişim sonucunu belirtir. 5 Farklı grubu vardır. Genel olarak ;
  * 1xx: Bilgi isteği
  * 2xx: Başarı
  * 3xx: Yönlendirme
  * 4xx: İstemci hatası
  * 5xx: Sunucu hatası

* 1xx

  Kullanıcı yani tarayıcının gönderdiği  isteğin sunucuya ulaştığını ve istek ile ilgili işlemin başlamış  olduğunu bildiren HTTP durum kodları sınıfıdır. Bu sınıftaki kodlar  şunlardır:

  - 100 - Devam

  - 101 - Protokol değiştirme

  - 102 - İşlem

* 2xx

  İstemciden gelen talebin sunucuya  ulaştığını, sunucu tarafından anlaşıldığını ve başarılı olduğunu ifade  eden kodları içeren sınıftır. Bu sınıftaki kodlar şöyledir:

  - 200 - Başarılı/Tamam
  - 201 - Oluşturuldu
  - 202 - Kabul edildi/Onaylandı
  - 203 - Yetersiz bilgi
  - 204 - İçerik yok
  - 205 - İçeriği baştan al
  - 206 - Kısmi içerik
  - 207 - Çoklu statü
  - 210 - Farklı içerik

* 3xx

  Bir yönlendirme söz konusu olduğunda  gösterilen ve ulaşılmak istenen bilginin, başka bir kaynağa taşındığını  bildiren HTTP durum kodlarından oluşan sınıftır. 3xx sınıfındaki kodlar  şu şekilde sıralanabilir:

  - 300 - Çoklu seçenek
  - 301 - Kalıcı yönlendirme
  - 302 - Geçici yönlendirme
  - 303 - Diğerlerine bak
  - 304 - Güncellenmemiş/Değiştirilmemiş
  - 305 - Proxy kullan
  - 307 - Geçici olarak yeniden yönlendirme

* 4xx

  Tarayıcı tarafından gönderilen isteğe  konu olan web sitesine ya da sayfaya ulaşılamadığında gösterilen ve  isteğin yerine getirilemediğini ifade eden HTTP durum kodları, bu sınıfa dâhildir. 4xx sınıfındaki kodlar şöyle sıralanmaktadır:

  - 400 - Kötü/Hatalı istek
  - 401 - Yetkisi
  - 402 - Ödeme gerekli
  - 403 - Yasaklandı/Erişim izni sorunu
  - 404 - Bulunamadı
  - 405 - İzin verilmeyen yöntem
  - 406 - Kabul edilemez
  - 407 - Proxy üzerinden yetkilendirme gerekli
  - 408 - Zaman aşımı
  - 409 - Çakışma
  - 410 - Kaynak artık yok/Kalıcı olarak bulunmuyor
  - 411 - Uzunluk (içerik boyutu) gerekli
  - 412 - Ön koşul başarısız
  - 413 - Girilen veri çok fazla
  - 414 - İstek URL’i çok büyük
  - 415 - Desteklenmeyen medya tipi
  - 416 - Kaynak kısmi geçersiz
  - 417 - İstek başarısız
  - 422 - İşlenemeyen varlık
  - 423 - Kilitli
  - 424 - Kaynak işleme alınamadı
  - 425 - Çok erken
  - 426 - Yükseltme gerekli
  - 428 - Ön koşul gerekli
  - 429 - Çok fazla istek
  - 451 - Yasal nedenlerle kullanılamıyor

* 5xx

  Kullanıcı isteğinin sunucuya başarılı  bir şekilde ulaşması fakat sunucu kaynaklı sorunlar nedeniyle isteğin  yerine getirilememesi hâlinde gösterilen kodların sınıfıdır. 5xx HTTP  durum kodları şunlardır:

  - 500 - Sunucu hatası
  - 501 - İstek uygulanmadı
  - 502 - Kötü ağ geçidi
  - 503 - Sunucu kullanılamıyor
  - 504 - Ağ geçidi zaman aşımı
  - 505 - HTTP sürümü desteklenmiyor
  - 507 - Yetersiz depolama
  - 509 - Bant genişliği sınırı aşıldı
  - 511 - Ağ kimlik doğrulaması gerekli
  - 521 - Web sunucusu kapalı

## Node Events

```typescript
'use strict';

const events = require('events');
const eventEmitter = new events.EventEmitter();

function merhaba() {
  console.log('Merhaba Dünya');
}

eventEmitter.on('yaz', merhaba);

eventEmitter.emit('yaz');
```

Genel olarak event oluşturma işlemleri için kullanır. Örnek kodda, merhaba fonksiyonu her 'yaz' kelimesinin emit edilmesinde çalıştırılacaktır..

```typescript
'use strict';

const http = require('http');

const sunucu = http.createServer(function (request, response) {

  response.write('Merhaba Node.js');

  response.end();

});

sunucu.listen(1453);

console.log('Sunucu çalışıyor...');

sunucu.on('connection', function (socket) {

  console.log('Yeni bir giriş algılandı.');

});

sunucu.on('request', function (socket) {

  console.log('Yeni bir istek algılandı.');

});
```

Buradaki örnekte, açılan bir webserver'in her connect işleminde ve request işlemlerinde fonksiyon çalışarak admin'e bilgi verebilecektir.



## Semantic Versioning 

* Genel olarak versiyon bilgisini temsil etmektedir.
* 3 ana bölgesi vardır.
  * Ex: 1.2.5
    * 1 Burada major bölgesidir, API'a kadar derin değişikleri vardır.
    * 2 Minor bölgesi bu bölgede API değişmez ama derin değişikler olabilir. Fonksiyon eklemeleri gibi.
    * 5 Patches, genel olarak bugların fixlendiği alandır.
  * Major değişikliği minor ve patches'i sıfırlar.

## Git Commit Conventions

* Conventional Commits şartnamesi, commit mesajları hakkında kolayca takip edilebilecek bir sözleşmedir. Otomatik araçlar yazılarak anlaşılabilecek açık bir commit geçmişi oluşturmak için kolay bir dizi kural sağlar. Bu sözleşme [SemVer](http://semver.org) ile uyumludur ve  commit mesajlarında yeni özellik ekleme (features), hata düzeltme  (fixes) ve yıkıcı değişiklik (breaking change) tanımlamalarını yapar.
  * **ix:** `fix` *tipi* bir commit kodunuzdaki bir hatayı düzeltir (Semantik versiyonlamadaki [`PATCH`](http://semver.org/#summary) ile paraleldir).
  * **feat:** `feat` *tipi* commit kodunuza yeni bir özellik ekler (Semantik versiyonlamadaki [`MINOR`](http://semver.org/#summary) ile paraleldir).
  * **BREAKING CHANGE:** `BREAKING CHANGE:` ile başlayan bir alt metin ya da tip/kapsam sonuna eklenmiş bir `!` içeren commit yıkıcı bir değişiklik getiriyordur (Semantik versiyonlamadaki [`MAJOR`](http://semver.org/#summary) ile paraleldir). Bir BREAKING CHANGE harhangi bir *tip* commit içinde olabilir.
  * `fix:` ve `feat:` dışında *tipler* de kullanılabilir. Örneğin [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, ve birkaç başka tipi de tavsiye eder (bu [the Angular sözleşmesinden](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) esinlenmiştir).
  * `BREAKING CHANGE: <description>` dışında *alt metinler* de kullanılabilir ve [git trailer format](https://git-scm.com/docs/git-interpret-trailers) takip edilebilir.

```
feat: config neslelerinin birbirinden türetilmesi sağlandı

BREAKING CHANGE: `extends` artık başka bir ayar dosyasından türetildiğini belirtiyor

refactor!: Node 6 desteği kaldırıldı

refactor(runtime)!: Node 6 desteği kaldırıldı

refactor!: Node 6 desteği kaldırıldı

BREAKING CHANGE: Sadece Node 6 içinde olan Javascript özellikleri kullanan yerler yeniden yazılmalı.

docs: CHANGELOG'daki yazım hataları düzeltildi

feat(lang): Türkçe çeviri eklendi

fix: bazı küçük yazım hataları düzeltildi

Detaylar için ilgili issue'ya bakabilirsiniz.

Daha detaylı bakılması da gerekebilir.

Reviewed-by: Z
Refs #133

```

* ## Şartname

  Bu belgedeki “-MALI”, “-MAMALI”, “ZORUNLU”, “YAPALIM”, “YAPMAYALIM”,  “-SAM IYI OLUR”, “-MASAM IYI OLUR”, “TAVSIYE EDILIR”, “-ABİLİRİM” ve  “SEÇMELİ” kalıpları [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt)‘da açıklandığı gibi yorumlanmalıdır.

  1. Her commit mesajı bir `feat`, `fix`, vs.  gibi bir tip ile başlaMALI, SEÇMELİ bir kapsam, SEÇMELİ bir `!` işareti ve ZORUNLU bir iki nokta üst üste işareti ve bir adet boşluk ile devam eder.
  2. `feat` tipi eğer commit uygulamaya ya da kütüphaneye yeni bir özellik ekliyorsa kullanılMALI.
  3. `fix` tipi eğer commit uygulamadaki bir hatayı düzeltiyorsa kullanılMALI.
  4. Tip bilgisinden sonra bir kapsam belirtilEBİLİR. Kapsam bilgisi  parantez içerisinde kodun hangi bölümün değiştiğine açıklayan bir  isimden oluşur. Örneğin `fix(parser):`.
  5. Açıklama tip/kapsam ön bilgilerinden sonraki iki nokta ve boşluktan  hemen sonra yazılMALIdır. Yapılan değişikliği anlatan kısa bir özettir.  Örneğin *fix: array parsing issue when multiple spaces were contained in string*.
  6. Kısa açıklamadan sonra, kod değişiklikleri hakkında ek bağlamsal  bilgiler sağlayan daha uzun bir commit mesajı metni yazılABİLİR. Mesaj  metni açıklamadan sonra boş bir satıra başlaMALIDIR.
  7. Bir commit mesaj metni serbest şekildedir ve boş bir satırla ayrılan herhangi bir sayıda paragraftan oluşABİLİR.
  8. Bir ya da birden fazla alt metin mesaj metninden bir boş satır sonra koyulABİLİR. Her alt metin bir anahtar kelime ile başlaMALI, anahtar  kelime ya `:<boşluk>` ile ya da `<boşluk>#` ayraçları ile bir metine bağlanmalı (bu [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)‘dan ilham almıştır).
  9. Alt metin anahtar kelimesi boşluk karakteri yerine `-` kullanmalı. Örneğin `Acked-by` (bu alt metnin çok paragraflı mesaj metinlerinden ayırılmasına yardımcı olur). Buna sadece istisna olarak sadece `BREAKING CHANGE` kalıbını anahtar kelime olarak kullanımına izin verilmiştir.
  10. Alt metin birden fazla boşluk ve satır içerEBİLİR, ve bir sonraki geçerli anahtar kelimeye ulaştığında bitmiş demektir.
  11. Yıkıcı değişiklikler ya tip/kapsam içinde ya da alt metin olarak belirtilMELİDİR.
  12. Eğer alt metin içinde belirtiliyorsa, yıkıcı değişiklik büyük  harflerle BREAKING CHANGE ile başlaMALI, iki nokta işareti, boşluk ve  açıklama ile devam etMELİDİR. Örneğin *BREAKING CHANGE: environment variables now take precedence over config files* gibi.
  13. Eğer tip/kapsam içinde belirtiliyorsa, yıkıcı değişiklikler `:` işaretinden önce `!` ile belirtilmelidir. Eğer `!` kullanılırsa altmetinde `BREAKING CHANGE:` kullanılMAYABİLİR ve commit açıklaması yıkıcı değişikliği tanımlamak için kullanılABİLİR.
  14. `feat` ve `fix` dışındaki tipler de kullanılABİLİR. Örneğin *docs: updated ref docs.*.
  15. Uygulamaya çalışanlar Conventional Commits’i oluştura kalıpları  büyük/küçük harf duyarlı düşünMEMELİ. Buna tek istisna BREAKING CHANGE  kalıbıdır çünkü her zaman büyük harfle yazılMALIdır.
  16. Alt metinde anahtar olarak kullanılırken BREAKING CHANGE BREAKING-CHANGE şeklinde yazılMALI.



* ## Neden Conventional Commits’e Uymalıyız

  - CHANGELOG’ları otomatik olarak oluşturma.
  - Bir semantik version tümcesini otomatik olarak belirleme (commit işlemlerinin tiplerine göre).
  - Değişikliklerin doğasını ekip arkadaşlarına, kamuya ve diğer paydaşlara iletmek.
  - Derleme ve yayınlama işlemlerini tetikleme.
  - İnsanların daha yapılandırılmış bir commit geçmişini kendi  kendilerine keşfetmelerine imkan vererek projelerinize katkıda  bulunmalarını kolaylaştırmak.
