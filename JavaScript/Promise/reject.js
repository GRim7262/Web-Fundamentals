const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Operation failed!");
  }, 1000);
});

failedPromise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);
