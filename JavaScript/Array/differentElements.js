// -> Mix of values
const arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];

console.log(arr[1].name); // -> get the object at index 1 and then show its name
arr[3](); // -> // get the function at index 3 and run it
