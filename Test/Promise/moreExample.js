function kiradAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
  return p;
}
const value = kiradAsyncFunction();
value.then(function () {
  console.log("Hi there");
});
