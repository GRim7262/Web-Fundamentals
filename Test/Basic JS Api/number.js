const num = 42;
const pixel = "42px";
const pi = 3.14;

console.log("parseInt");

console.log(parseInt(num));
console.log(parseInt(pixel));
console.log(parseInt(pi));

console.log("************************************************");

console.log("parseFloat");

console.log(parseFloat(num));
console.log(parseFloat(pixel));
console.log(parseFloat(pi));

const numArr = [42, "42px", 3.14];
function logArr(numArr) {
  console.log(numArr);
}

console.log("Calling function all function with one function");

console.log("************************************************");

numArr.forEach(logArr);

console.log("************************************************");

console.log("calling function one by one");

logArr(numArr[0]);
logArr(numArr[1]);
logArr(numArr[2]);
