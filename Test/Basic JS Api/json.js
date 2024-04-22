// JavaScript Object Notation

const users = '{"name": "harkirat", "age": 24, "gender": "male"}';

console.log(users);

console.log("JSON.parse()");

const user = JSON.parse(users); //converts a JSON-formatted string into a JavaScript object
console.log(user, "\n");

const userObj = { name: "harkirat", age: 24, gender: "male" };

console.log(userObj);

console.log("JSON.stringify()");

const user2 = JSON.stringify(userObj); // converts a JavaScript object into a JSON-formatted string
console.log(user2);
