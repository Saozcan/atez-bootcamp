/**
 * CommenJS module
 */

const http = require('http');

const server = http.createServer((req, res) => { // request, response
  res.write("Hello Atez Bootcamp Students")
  res.end()
}).listen(1234);

/**
 * Server yap, bunu çıktı olarak ver.
 * localhost:1234 adresine gidip çıktıyı görebiliriz.
 */


/**
 * REST API
 * 200 -> OK
 * 201 -> Created
 * 400 -> Bad Request
 * 404 -> Not Found
 * 500 -> Internal Server Error
 * 503 -> Service Unavailable
 * 504 -> Gateway Timeout
 * Genel olarak bilinmesi gerekenler
 */

http.createServer((req, res) => {
  res.writeHead(500, { 'Content-Type': 'text/html' });
  res.write('Hello Atez Bootcamp Students');
  res.end();
}).listen(1235);


/**
 * pathQuery
 * NextJs in pathQuery kısmı ile aynı.
 */

const url = require('test/testWebserver/http/url.cjs');
const fs = require('fs');

http.createServer((req, res) => {
  const pathQuery = url.parse(req.url, true);
  const fileName = `${pathQuery.pathname}.html`;
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('Böyle bir sayfa bulunamadı.');
    }
    res.write(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  })
}).listen(1236);

















