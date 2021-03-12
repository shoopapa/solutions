// let arr = ["harry","joe","nathan"]

// let i = 0
// while ( i<5 ) {
//   console.log(i)
//   i = i + 1
// }

// for (let i = 0; i < arr.length; i = i + 1) {
//   const element = arr[i];
//   console.log(element)
// }

// 0 1 2 3 5 8 13 21 ...
// const arr = [0, 1]
// let total = 0

// while ( true ) {
//   const nextNum = arr[ arr.length - 1 ] + arr[ arr.length - 2 ]
//   if (nextNum > 4e6) {
//     break
//   }
//   if ( nextNum % 2 === 0) {
//     total = total + nextNum
//   }
//   arr.push(nextNum)
// }
// console.log(total)

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


let total = 0


// 1 2 3 4 5 6 7 8 9 ..
let i = 0
while (i < 1000) {
  if ( i%3 === 0|| i%5===0 ) {
    total = total + i
  }

  i++ // i = i + 1
}
console.log(total)
