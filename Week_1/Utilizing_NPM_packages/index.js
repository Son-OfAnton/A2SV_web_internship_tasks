const _ = require("lodash")

const arr1 = [5, 4, 3, 2, 1]
const arr2 = [1, 2, 3]

const arrDiff = _.difference(arr1, arr2)
console.log(arrDiff)  // Output: [ 5, 4 ]

const sortedArr1 = _.sortBy(arr1)
console.log(sortedArr1)   // Output: [ 1, 2, 3, 4, 5 ]

const maxArr1 = _.max(arr1)
console.log(maxArr1)    // Output: 5

const greaterThanThree = _.filter(arr1, (num) => num >= 3)
console.log(greaterThanThree)   // Output: [ 5, 4, 3 ]

const pairNeighbours = _.chunk(arr1, 2)
console.log(pairNeighbours)   // Output: [ [ 5, 4 ], [ 3, 2 ], [ 1 ] ]

const debouncedFunc = _.debounce((val) => console.log(val), 1000)
debouncedFunc('a')
debouncedFunc('b')
debouncedFunc('c')    // Output: c