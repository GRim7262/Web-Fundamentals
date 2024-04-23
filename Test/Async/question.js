function someSyncTask1() {
  console.log("Some sync task 1");
}

function someSyncTask2() {
  console.log("Some sync task 2");
}

setTimeout(function (data) {
  someSyncTask2(data);
}, 5000);

someSyncTask1();
