function log1() {
  console.log("Hello World 1");
}

function log2() {
  console.log("Hello World 2");
}

function logIt(callBack) {
  callBack();
}

logIt(log1);
logIt(log2);
