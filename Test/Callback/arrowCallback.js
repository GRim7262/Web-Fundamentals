// Arrow function as callback

const callbackFunciton = () => {
  console.log("Callback function executed!");
};

const higherOrderFunction = (callback) => {
  console.log("Inside higher-order function");
  callback();
};

higherOrderFunction(callbackFunciton);
