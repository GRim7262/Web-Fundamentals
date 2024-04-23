const fs = require("fs");

function kiratReadsFile() {
  return new Promise(function (resolve) {
    console.log("Inside Promise ");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("Before Resolve ");
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

let a = kiratReadsFile();
a.then(onDone);
