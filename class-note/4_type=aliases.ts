interface dPerson {
  name: string;
  age: number;
}
/*
type dPerson = {
  name: string;
  age: number;
};
*/
var seho: dPerson = {
  name: "세호",
  age: 31,
};

type MyString = string;
var str: MyString = "hello";
type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
