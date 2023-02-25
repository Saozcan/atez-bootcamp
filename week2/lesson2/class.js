class Ders {
  constructor(name, teacher) {
    this.name = name;
    this.teacher = teacher;
  }

  getClassNameWithTeacher() {
    if (this.name && this.teacher) {
      return this.name + " dersin öğretmeni " + this.teacher;
    } else {
      return "Öğretmen veya ders adı girilmedi"
    }
  }

  getClassName() {
    return this.name;
  }

  setName(name) {
    if (name) {
      this.name = name;
    }
  }
}

const ders = new Ders("Matematik", "Umut");

console.log(ders.getClassNameWithTeacher());
ders.setName("Fizik");
console.log(ders.getClassNameWithTeacher());

class Matematik extends Ders {
  constructor(name, teacher, grade) {
    super(name, teacher);
    this.grade = grade;
  }

  getClassNameWithTeacher() {
    return super.getClassName() + " dersin öğretmeni " + this.teacher;
  }
}

const matematik = new Matematik("Matematik", "Umut", 10);


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log(this.name + " makes a noise.");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(this.name + " meows.");
  }
}

const goldenRetriever = new Dog("Eddie");
console.log(goldenRetriever.bark());