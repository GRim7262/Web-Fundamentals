const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// Find the user object with the name "Mary"
const user = users.find((item) => item.name == "Mary");
console.log(user.id); // Print the id of the user with name "Mary"

console.log("***************************");

// Find the index of the first occurrence of a user object with the name "John"
console.log(users.findIndex((user) => user.name == "John"));

console.log("***************************");

// Find the index of the last occurrence of a user object with the name "John"
console.log(users.findLastIndex((user) => user.name == "John"));
