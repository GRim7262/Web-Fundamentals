function callbackFunciton() {
  console.log("Callback function executed!");
}

function higherOrderFunction(callback) {
  console.log("Inside higher-order function");
  callback();
}

higherOrderFunction(callbackFunciton);
