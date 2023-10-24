// const checkKey = (obj, key) => {
//   return obj.hasOwnProperty(key)
// }
// console.log(checkKey({ name: 'Alex' }, 'name'))


// const countVowel = (str) => {
//   const vowelList = ['a', 'e', 'i', 'o', 'u']
//   const checkStr = str.toLowerCase()
//   let count = 0
//   for (let i = 0; i < str.length; i++) {
//     if (vowelList.includes(checkStr[i])) count++
//   }
//   return count
// }
// console.log(countVowel('Hello worldE'))


// const studenti = {
//   alex: [5, 6, 7, 8],
//   victor: [6, 7, 8, 10],
//   vasile: [8, 9, 7, 10]
// }
// const checkGradesAverage = (obj) => {
//   const keys = Object.keys(obj)
//   return keys.reduce((acc, curr) => {
//     const average = obj[curr].reduce((a, c) => a + c) / obj[curr].length.toFixed(1)
//     acc[curr] = `Media: ${average}`
//     return acc
//   }, {})
// }
// console.log(checkGradesAverage(studenti))


// const stringReverse = (str) => {
//   return str.split('').reverse().join('')
// }
// console.log(stringReverse('Hello world'))


// const checkPolindrom = (str) => {
//   return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
// }
// console.log(checkPolindrom('Leevel'))


// const list = [5, 6, 8, 9, 10, 4, 12]
// const number = 3
// const findBestMatch = (arr, k) => {
//   return arr.reduce((acc, cur) => {
//     return (acc - k) < (cur - k) ? acc : cur
//   })
// }
// console.log(findBestMatch(list, number))


// const list = [5, 6, 8, 9, 10, 4, 12]
// const number = 7
// const findBestMatch = (arr, k) => {
//   return arr.reduce((acc, cur) => {
//     return Math.abs(acc - k) < Math.abs(cur - k) ? acc : cur
//   })
// }
// console.log(findBestMatch(list, number))


// const list = [1, 5, 4, 2, 6, 9, 20, 3, 7]
// const sortArr = (arr) => {
//   const even = arr.filter((item) => item % 2 === 0).sort((a, b) => b - a)
//   const odd = arr.filter((item) => item % 2 !== 0).sort((a, b) => a - b)
//   return [...odd, ...even]
// }
// console.log(sortArr(list))


// Array.prototype.customeMap = function (callback) {
//   const result = []
//   for (let index = 0; index < this.length; index++) {
//     result.push(callback(this[index], index))
//   }
//   return result
// }
// const testMap = [1, 2, 3].customeMap((item) => item + 1)
// console.log(testMap)



// Array.prototype.customeMap = function (callback) {
//   return this.reduce((acc, cur, idx) => {
//     acc.push(callback(cur, idx))
//     return acc
//   }, [])
// }
// const testMap = [1, 2, 3].customeMap((item) => item + 1)
// console.log(testMap)


// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1
//   if (a === 2) {
//     resolve('success')
//   } else {
//     reject('failed')
//   }
// })
// p.then((message) => {
//   console.log('This is in then' + message)
// })


// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1
//   if (a === 2) {
//     resolve('success')
//   } else {
//     reject('failed')
//   }
// })
// p.then((message) => {
//   console.log('This is in then ' + message)
// }).catch((message) => {
//   console.log('This is in catch ' + message)
// }).finally(() => {
//   console.log('Will be implemented no matter what ')
// })


// const userLeft = true
// const priceIsTooHigh = true
// function sellCars(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User left',
//       message: 'Should act more quicly'
//     })
//   } else if (priceIsTooHigh) {
//     errorCallback({
//       name: 'Price is too high',
//       message: 'Should low the price'
//     })
//   } else {
//     callback('We sold the car')
//   }
// }
// sellCars((message) => {
//   console.log('Succeess: ' + message)
// }, (error) => {
//   console.log(`${error.name}:${error.message}`)
// })


// const userLeft = true
// const priceIsTooHigh = true
// function sellCarsPromise() {
//   return new Promise((res, rej) => {
//     if (userLeft) {
//       rej({
//         name: 'User left',
//         message: 'Should act more quicly'
//       })
//     } else if (priceIsTooHigh) {
//       rej({
//         name: 'Price is too high',
//         message: 'Should low the price'
//       })
//     } else {
//       res('We sold the car')
//     }
//   })

// }
// sellCarsPromise()
//   .then(message => console.log('Success: ' + message))
//   .catch(error => console.log(`${error.name}:${error.message}`))


// const promise1 = new Promise((res, rej) => res('promise1'))
// const promise2 = new Promise((res, rej) => res('promise2'))
// const promise3 = new Promise((res, rej) => res('promise3'))
// Promise.all([
//   promise1,
//   promise2,
//   promise3
// ]).then((mess) => {
//   console.log(mess)
// })


// const promise1 = new Promise((res, rej) => res('promise1'))
// const promise2 = new Promise((res, rej) => res('promise2'))
// const promise3 = new Promise((res, rej) => res('promise3'))
// const promise4 = new Promise((res, rej) => res('promise4'))
// Promise.race([
//   promise1,
//   promise2,
//   promise3
// ]).then((mess) => {
//   console.log(mess)
// })


// setTimeout(() => {
//   console.log('message')
// }, 3000)



console.log(1)
setTimeout(() => {
  console.log(2)
}, 1000)
setTimeout(() => {
  console.log(3)
}, 0)
console.log(4)