const catchError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Not Done");
  }, 1000);
  setTimeout(() => {
    resolve("Done");
  }, 1000);
});

catchError.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  }
);
