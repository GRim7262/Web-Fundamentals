const arr = [1, 2, 3, 4, 5, 6];

const newArr = [];

// Basic Method
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}
console.log("Basic Method", newArr);

// Filter Method
const ans = arr.filter((i) => i % 2 == 0);
console.log("Filter Method ", ans);
