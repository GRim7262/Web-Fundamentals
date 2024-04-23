// let p = new Promise(function (resolve) {
//   resolve("Hi there");
// });

// p.then(function () {
//   console.log(p);
// });

function kiradAsyncFunction() {
  // Creating an async fn
  let p = new Promise(function (resolve) {
    resolve("Hi there");
  });
  return p;
}

// kiradAsyncFunction().then(function (data) {
//   console.log(data);
// });

const ans = kiradAsyncFunction(); // Calling an async fn
ans.then(function (data) {
  console.log(data);
});
