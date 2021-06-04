const pascal = (n: number): number[] => {
  const ret: number[] = [1]
  let prev = 1;
  for (let i = 1; i <= n; i++) {
    let curr = (prev * (n - i + 1)) / i;
    ret.push(curr)
    prev = curr;
  }
  return ret
}
const sumOfSquares = (arr: number[]): number => {
  let ret:number = 0
  arr.forEach(a => {
    ret+=a*a
  })
  return ret
}

console.log(sumOfSquares(pascal(20)))