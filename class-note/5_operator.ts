function logMessage(value: any) {
  console.log(value);
}
logMessage("hello");
logMessage(10);
logMessage(false);

// 유니온 타입

function logMessaged(value: string | number) {
  if (typeof value == "number") {
    value.toLocaleString();
  }
  if (typeof value == "string") {
    value.toString();
  }
  throw new TypeError("Value must be string or number");
  // Type Guard
}
logMessaged("hello");
logMessaged(19);

interface Developer {
  name: string;
  skill: string;
}

interface Man {
  name: string;
  age: number;
}
/* 
유니온 타입(|)을 사용하면 두 가지 타입을 전부 통과해야만 사용할 수 있지만
인터섹션 타입(&)을 사용하면 두 가지 타입을 전부 통과하지 않아도 사용할 수 있다.
But 함수를 이용하여 데이터를 넘길 때 인터섹션 타입은 두가지 타입을 전부 만족해야 한다.
*/
function askSomeone(someone: Developer | Man) {
  someone.name;
}
askSomeone({ name: "개발자", skill: "웹 개발" });
askSomeone({ name: "덕", age: 25 });

function askSomeoned(someone: Developer & Man) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeoned({ name: "개발자", skill: "웹 개발", age: 25 });

var duck: string | number | boolean;
var dduck: string & number & boolean;
