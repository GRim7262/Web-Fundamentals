const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

const someUsers = users.filter((item) => item.id < 3);
console.log(someUsers.length);
