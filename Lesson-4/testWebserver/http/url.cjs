const url = require('test/testWebserver/http/url.cjs');
const websiteUrl = "http://www.atez.com.tr:8080/about"
const websiteUrlEN = "http://www.atez.com.tr:8080/en/about"

const urlParams = url.parse(websiteUrl);
const urlParamsEN = url.parse(websiteUrlEN);
console.log(urlParams);
console.log('EN', urlParamsEN);

/**
 * Ödev parse yaparak hangi dilde yapıldığını bulunacak
 * en de ru ae
 *
 * "http://www.atez.com.tr:8080/en/about"
 * "http://www.atez.com.tr:8080/ru/about" hangi dili destekliyor ?
 */







