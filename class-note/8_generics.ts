function logText(text) {
  console.log(text);
  return text;
}
logText(10);
logText("hi");

function logTextType<T>(text: T): T {
  console.log(text);
  return text;
}
logTextType<string>("hi");
