const multiply = [1, 2, 3, 4, 5];

// simple method
const newArr = []; // Create an empty array

for (let i = 0; i < multiply.length; i++) {
  newArr.push(multiply[i] * 2);
}
console.log("Basic Method: ", newArr);

// map method
const transform = (i) => i * 2;

const ans = multiply.map(transform);
console.log("Map Method: ", ans);

// Don't define your function separately

const ans2 = multiply.map((i) => i * 2);
console.log("Anonymous arrow function directly inside map() ", ans2);
