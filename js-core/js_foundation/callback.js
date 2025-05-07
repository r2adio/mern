function squnre(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function sos(a, b, cb) {
  const val1 = cb(a);
  const val2 = cb(b);
  return val1 + val2;
}
const ans = sos(1, 2, cube);
console.log(ans);
