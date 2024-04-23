// Normal Syntax

// function kiratAsyncFunction() {
//   let p = new Promise(function (resolve) {
//     resolve("Hi there");
//   });
//   return p;
// }

// function main() {
//   kiratAsyncFunction().then(function (value) {
//     console.log(value);
//   });
// }

// main();

//Async/Await Syntax

function kiratAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("Hi there");
  });
  return p;
}

async function main() {
  const ans = await kiratAsyncFunction();
  console.log(ans);
}

main();
