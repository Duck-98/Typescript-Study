interface User {
  age: number;
  name: string;
}
// 변수에 인터페이스 활용
var duck: User = {
  age: 25,
  name: "duck",
};

// 함수에 인터페이스 활용

function getUser(user: User) {
  console.log(user);
}

const person = {
  age: 25,
  name: "ck",
};
getUser(person);
// 함수의 구조에 인터페이스를 활용

interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;

sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱 방식에 인터페이스를 활용

interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
// arr[0] = 10;

// 인터페이스 딕셔너리 패턴 (정규표현식)

interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj = {
  sth: /abc/,
};

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장 <상속>

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var devduck: Developer = {
  name: "duck",
  age: 25,
  language: "JS ES-6",
};
