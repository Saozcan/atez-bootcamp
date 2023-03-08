/**
 * Node JS Prosesler üzerinde çalışır.
 *
 */

import process from 'process';
// const process = require('process'); // commenjs


console.log(process.argv);

/**
 * NPM bir paket yöneticisidir.
 * loopback adında paketi kullanacağız.
 *
 * package-json -> uygulamamızın kendine ait dosyaları, kütüphaneyi gösterir. Örn. Şu an process paketi yüklü.
 * package-lock-json -> uygulamamızın bağımlılıklarını gösterir.
 * lack cashleme yapar. lack olmasının budur.
 * node_modules -> process kütüphanesinin içerdiği dosyalar buraya yüklenir.
 *
 */

/**
 * Alınan hata ;
 * SyntaxError: Cannot use import statement outside a module
 *
 * Çözüm ;
 * node.js 13.0.0 sürümünden sonra import kullanılamaz.

 const process = require('process'); // commenjs
 import process from 'process';

 * require olarak eklemek gerekiyor.
 *
 * Yada package json dosyasına aşağıdaki kodu ekleyip tekrar çalıştırabiliriz.
 * "type": "module",
 *
 * ```typescript
 * {
 *   "type": "module", // bu satırı ekledik.
 *   "dependencies": {
 *     "process": "^0.11.10"
 *   }
 * }
 * ```
 *
 * Yada...
 * dosya uzantısı .mjs olmalı.
 *
 *
 */

/**
 * .argv -> arka planda çalışan komutları gösterir.
 *  '/home/saozcan/.nvm/versions/node/v18.14.1/bin/node',
 *   '/home/saozcan/Desktop/atez-bootcamp/Lesson-4/builtin.functions.js'
 */


/**
 * env -> environment
 * process.env -> process içindeki env
 * process.env.NODE_ENV -> process içindeki env içindeki NODE_ENV
 *
 */

// console.log("env:" , process.env); // bütün env değerlerini gösterir.
// console.log(process.env.NODE_ENV);

console.log("Test")

/**
 * package.json içinde script kısmına verilen kodlar çalıştırılabilir.
 * "scripts": {
 *  "start": "node ./Lesson-4/builtin.functions.js",
 *
 */

/**
 * os -> operating system
 * os modülü ile işletim sistemine ait bilgileri alabiliriz.
 */

import os from 'os';

// console.log("os:" , process.env);
console.log(os.cpus(), os.uptime())
console.log(os)

/**
 * Bundlephonie paketleri görebilir, alternatifleri inceleyebiliriz. Boyutsal olarak
 */

/**
 * const fd = require('fs') ödev olcak.
 */

console.log(process.env.TEST)

import fs from 'fs';

fs.readFile('file.txt', function (err, data) { // encode etmeden verir
  console.log(data)
})


fs.readFile('file.txt', "utf8",function (err, data) { // encode edilmiş hali
  console.log(data)
})












