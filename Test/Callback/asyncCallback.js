function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

function processedData(data) {
  console.log("Processing Data: ", data);
}

fetchData(processedData);
