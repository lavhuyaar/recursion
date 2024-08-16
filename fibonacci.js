//Fibonacci using iterative method
function fibs(n) {
  if (n < 1) {
    return [0];
  }
  let fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr;
}
console.log(fibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13]

//Fibonacci using recursive method
function fibsRec(n) {
  if (n <= 2) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }
  let arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
console.log(fibsRec(8)); //[0, 1, 1, 2, 3, 5, 8, 13]
