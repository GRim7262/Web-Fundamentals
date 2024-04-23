function sumOfAll(a, b, fn) {
  const value1 = fn(a);
  const value2 = fn(b);
  return value1 + value2;
}

const ans = sumOfAll(1, 2, function (n) {
  return n * n;
});
console.log(ans);

const ans2 = sumOfAll(1, 2, function (a) {
  return a * a * a;
});
console.log(ans2);
