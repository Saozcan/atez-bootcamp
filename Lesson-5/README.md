# 5. Ders

## Asenkron Programlama

* Senkron aksine birinin bitmesine beklemeden diğerinin işlem görmesi durumudur.
* Beklemeden diğer işlemlerin gerçekleşmesini sağlar. 

## SQL

Sıfırdan DB kurma, sorgu atma ...

* Veri tabanı, normal zamanlarda veriyi kaydettiğimiz, tuttuğumuz yapılar. Genel olarak pointer bir veriyi işaretler. 
* Çalışma için dbeaver kullanılacak.
* İlişkiler
  * one to one
  * one to many
  * many to many

## Keywords

* CALLBACK hell
* Promise API
  * Asenkron programlamanın temelidir. Özünde bir objedir. Bio gibi bir objedir. İçinde çeşitli metotları olan. Success veya fail return. Hata durumda data dönmez. Data nın döndüğü yer success kısmıdır. 
  * Fazla kullanımda sorunlar ortaya çıktığından async await ortaya çıkmıştır.
* Async/await
* fetch
* pending
* SQL
  * ordey by - desc - asc
  * group by
  * from ... where ... between ... and ...
  * begin transaction - commit - rollback
  * update
  * varchar
  * primary key - foreing key
  * drop
  * injection - join
  * %..%
  * insert
  * create - create table
  * having
  * references
  * inner join
  * left join - left outer join - right outer join
  * create view ... as 
  * create index ... on ...
  * select distinct ... from ...
  * inbuild functions (UPPER, LOWER ... etc)
  * create or replace function ...() 
    * return integer as $total$
    * declare
      * total integer;
    * begin
      * select * into elementrary from students
    * end
  * alter table (güncelle, rename vb.)
  * LANGUAGE
  * create PROCEDURE
    * LANGUAGE SQL
  * 

## Homework

* Promise Deep Dive
* Async await Deep Dive
* begin transaction
* commit
* rollback
* SUBQuery
* 