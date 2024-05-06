const arr = [1, 2];

console.log(arr.concat([3, 4]));

console.log(arr.concat([3, 4], [5, 6]));

console.log(arr.concat([3, 4], 5, 6));

console.log(`*********************************`);

const arr2 = [1, 2];
const arrayLike = {
  0: "Something",
  length: 1,
};

console.log(arr2.concat(arrayLike));

console.log(`*********************************`);

const arr3 = [1, 2];
const arrayLike3 = {
  0: "Something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
console.log(arr3.concat(arrayLike3));
