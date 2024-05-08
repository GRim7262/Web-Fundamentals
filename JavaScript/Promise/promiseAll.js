const promise1 = Promise.resolve("One");
const promise2 = Promise.resolve("Two");

Promise.all([promise1, promise2])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
