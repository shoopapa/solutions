const testReverse = (num:number) => {
  const reversed = parseInt(num.toString().split("").reverse().join(""))
  if (reversed === num) return true
  return false
}

let last = 0
for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    const c = i * j
    if (testReverse(c) && c > last) {
      last = c
      console.log(c)
    }
  }
}