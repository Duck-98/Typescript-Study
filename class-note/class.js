function Person(name, age) {
  this.name = name;
  this.age = age;
}
var dduck = new Person("덕경", 25);
class Person {
  // class Logic
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}
var duck = new Person("덕경", 25);
console.log(duck); // Person{name : '덕경', age :25}
