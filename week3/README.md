# ATEZ Bootcamp

## Week 3

* Generics and any

  * Generic genel oluşturulan değişkenlerin başta tip atamlarına kullanılmaktadır. Any ise alınacak argümanın her tipte geleceğini belirtir. Kullanmak ts yapısına uygun değildir.
* Enums

  * enum Gun { Pazartesi, Salı, Carsamba, Persembe, Cuma, Cumartesi, Pazar }; Kendi içinde numaralandırma yaparak kod içinde koşullar vb. alanda kullanılabilir.
* Deep Dive Functions

  * Ts fonksiyonlarına delin dalış
* Deep Dive Inheritance and extends

  * Inheritance classların miras yapısı için kullanılır. Extednds keyword ile kendileri aralarında miras yapısı kullanılabilir.
* Classes

  * Classlar, nesne proglamar için kullanılmaktadır. Her şeyin bir nesne olduğunu varsayarsak, class kullanılarak kendileri içinde kullanılır. Tabi bu nesneleme proglamanın güzel bir yanıda nesnelerin ortak özelliklerinin bir yerde tutularak duplicate işlemlerden kaçınılabileceğidir. Hayvan class'ı kullanılarak ortak özellikler tek bir çatı altında tutulabilir ve takibinde oluşturulacak yeni hayvan çeşitleri için miras yapısı kullanılarak kodsal anlamda daha anlaşılır ve daha temiz kodlar yazılabilir. Classların kendi içlerinde farklı yapıları vardır. Constructor (ilk oluşturulma aşamasında çağırılır), get set fonksiyonları (içerde tutulan private değişkenler güvene alınır)...
* Architecture filing (Models, enums, classes)
* Hot reload and watching

  * Hot reload, emülatörlerde, simülatörlerde ve cihazlarda koda uygulanan değişiklikleri anında görüntülemenizi sağlar.
* Commands

  * Yorumlama Js, Ts dünyası için bence vazgeçilmez bir özelliktir. Özellikle yapılan işlemlerin anlatılması, fonksiyon ve componentlerin görevlerinin, alınan argümanların, return değerlerinin anlatılması çok önemlidir. Grup çalışmalarında kişilerin kodu yazan kişi ile hiçbir ileteşime geçmeden kodu idame edebilmesi gerekir. Yorum satırları deyince özellikle TODO: işlemlerine çok ihtiyaç duyuluyor ve gerçekten çok hayat kurtarıyor.
* Bonus implements 👍 Interface eklemek için kullanılabilir, nullable değilse hepsi eklenmek zorundadır.
