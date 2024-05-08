const successfulPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation Succeeded!");
  }, 1000);
});
successfulPromise.then((data) => {
  console.log(data);
});
