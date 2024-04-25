const greetings = "hello";

const modifyString = (greetings, cb) => {
  return cb(greetings);
};

const addExclamation = (greetings) => {
  return greetings + "!";
};

console.log(modifyString(greetings, addExclamation));
