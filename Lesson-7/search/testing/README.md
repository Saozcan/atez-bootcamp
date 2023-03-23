# TEST

### Mocha

* Mocha node.js ve browserda çalışabilen zengin özellikler içeren bir test frameworküdür.
  * npm install –global mocha 
  * npm install -save-dev mocha

```javascript
var assert = require('assert');  
describe('Array', function() { 
    describe('#indexOf()', function() { 
        it('should return -1 when the value is not present', function() {  
          assert.equal([1, 2, 3].indexOf(4), -1);
        }); 
    }); 
}); 
```

* Yükleme işlemleri sonrası dosya adı *test.js olmalıdır.
* Bulunulan dizinde mocha komutu ile çalıştırma sağlanabilir.

```shell
╰─>$ mocha

  Array
    #indexOf()
      ✔ should return -1 when the value is not present


  1 passing (2ms)

```

