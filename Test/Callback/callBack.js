function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}
function sumOfAll(a, b, cb) {
  const value1 = cb(a);
  const value2 = cb(b);
  return value1 + value2;
}

const ans = sumOfAll(1, 2, cube);
console.log(ans);
