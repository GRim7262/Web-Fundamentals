const sum = (a = 0, b = 0) => a + b;
const ans = sum(2);
console.log(
  "Since we gave only one argument the default value of b is 0, so 2 + 0: ",
  ans
);
