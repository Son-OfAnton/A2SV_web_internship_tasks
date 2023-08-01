const _ = require("lodash")

const arr1 = [5, 4, 3, 2, 1]
const arr2 = [1, 2, 3]

const arrDiff = _.difference(arr1, arr2)
console.log(arrDiff)

const sortedArr1 = _.sortBy(arr1)
console.log(sortedArr1)

const maxArr1 = _.max(arr1)
console.log(maxArr1)

const greaterThanThree = _.filter(arr1, (num) => num >= 3)
console.log(greaterThanThree)

const pairNeighbours = _.chunk(arr1, 2)
console.log(pairNeighbours)