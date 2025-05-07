// promises are syntactical sugar, that makes code slightly readable.
// when using promises, there're no callbacks.

// w/o promises:
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  // return ans;
  console.log(ans);
}
function findSumTill100() {
  return findSum(100);
}
setTimeout(findSumTill100, 1000);
console.log("hello world");
