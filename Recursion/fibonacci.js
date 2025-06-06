function fibbonacci(n) {
  if (n <= 1) return n;
  return fibbonacci(n - 1) + fibbonacci(n - 2);
}

function fibbonacciArray(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let fibs = fibbonacciArray(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibs;
  }
}

console.log(fibbonacci(7));
console.log(fibbonacciArray(7));
