```postgresql

// student => firstName, surName, studentNumber(unique), address

// varchar (65535), char(255), bool, text, int, float, decimal, bigint , date


create table students (
id int primary key,
first_name varchar(255),
last_name varchar(255),
student_number int unique,
address text,
telephoneNumber varchar(255),
email varchar(255),
classes varchar(255),
department varchar(255)
);

// null olma durumu -> constrait gibi bir şey 
// ORM burda yazılanları yapıyor olacak

insert into students (id, first_name, last_name, student_number, address, telephonenumber, email, classes, department)
values (1 ,'deniz can', 'tufekci', 10, 'Istanbul', '123123123', 'denic@gmail.com', 'Sql', 'Computer Science')


insert into students (id, first_name, last_name, student_number, address, telephonenumber, email, classes, department)
values (2 ,'esra', 'budak', 11, 'Istanbul', '123123123', 'denic@gmail.com', 'Sql', 'Computer Science')


insert into students (id, first_name, last_name, student_number, address, telephonenumber, email, classes, department)
values (3 ,'samim', 'ozcan', 12, 'Istanbul', '123123123', 'denic@gmail.com', 'Sql', 'Computer Science')


// tüm verileri almak
select * from students s;

// limitlemek için, ilk 2 alır
select * from students s limit 2;

// s bir pointer, istenilen tarza çıktı verebilir
select s.email , first_name , last_name  from students s;

// kullanıcının soy adı budak olanı ver
select * from students s where s.last_name = 'budak';

// kullanıcının soy adı budak olanı ver, and komutu ile ekstra durumlar eklenebilir
select * from students s where s.last_name = 'budak' and .first_name = 'esra';

// like komut ile beraber içerisinde tu içerenleri verir
select * from students s where s.last_name like '%tu%';

//distinct çiftlileri teke çevirir, iki tane aynı isimde olsa bile tek çıkartır.
select distinct s.first_name from students s;


// bir işlem yaparken bütün table ı değiştirmemek için
// update bütün table üzerinde değişiklik yaptığı için begin transaction ile 
// kullanırsak rollback fonksiyonu ile geri gelme yapabiliriz. Reflesh atıldığında 
// değişiklik görünmez lakin select ile yazıldığında yeni güncelleme görülebilir.
begin transaction;
update students set first_name = 'samim', last_name = 'ozcan'
select * from students s;
rollback;
// eğer işlem uygunsa ve kaydetmek isteniyorsa commit; kullanılır.


// update specific condition
update students set first_name = 'Samim', last_name = 'Ozcan' where (select * from students where email = 'denic@gmail.com');


// delete işlemi
delete from students where student_number = 10;
// Soft delete kullanılması daha uygundur.
// db den veri silmek çok yanlıştır. Yukarıda yapılan işlem hard delete işlemidir.
// soft delete ise içeriye isDeleted boolean koyularak, silme işlemi yapılmıştır gibi senaryo yapılmıştır.


select * from students s where student_number > 10;

//Sıralama yapmak için, desc order olacak şekilde yapıldı.
select * from students s order by student_number desc ;

//Gruplama
select * from students s where first_name = 'Samim' group by s.classes ;


// drop table students, bütün data ile beraber siler
drop table students 

// One to one -> bire bir
// one to many -> bire çok
// Many to Many  -> çoka çok
// Bu yüzden yeniden olması gerektiği gibi bir table oluşturuyoruz.

// students -> id, first_name, last_name, student_number
// lecture -> id, lectureCode (unique), name, start_date, end_date
// teacher -> first_name, last_name, department_id
// lectures_teachers -> id, lecture_id, teacher_id
// address -> id, description
// student_address -> id, student_id, address_id
// department -> id, name
// student_department -> id, department_id, student_id

create table students (
id int primary key,
first_name varchar(100) not null,
last_name varchar(100) not null,
student_number int not null UNIQUE
);

create table lectures (
id int primary key,
lecture_code varchar(50) unique,
name varchar(255) not null,
start_date date,
end_date date
);

create table teachers (
id int primary key,
first_name varchar(100) not null,
last_name varchar(100) not null
);

create table lectures_teachers (
id int primary key,
lecture_id int references lectures(id),
teacher_id int references teachers(id)
);

create table address (
id int primary key,
description text
);

create table students_address (
id int primary key,
student_id int references students(id),
address_id int references address(id)
);


```

- Öncelik Model > Datasource > Repository > Controller ...
- 