import _ from 'lodash'

export const compileFruits = (fruitObjects) => (
  _.reduce(fruitObjects, (accu, fruitObject) => (
    addCleanedFruits(cleanAllFruit(fruitObject), accu)
  ), {})
)

const cleanAllFruit = (fruitObject) => (
  _.reduce(fruitObject, (accu, numOfFruit, fruit) => (
    Object.assign({[fruit]: cleanSingleFruit(numOfFruit)}, accu)
  ), {})
)

const cleanSingleFruit = (fruit) => {
  if (fruit) {
    return typeof(fruit) === 'number' ? fruit : reduceOneFruit(fruit)
  } else {
    return 0
  }
}

const reduceOneFruit = (fruit) => (
  _.reduce(fruit, (acc, numFruit, type) => acc + numFruit, 0)
)

const addCleanedFruits = (fruitsToAdd, allFruits) => (
  _.reduce(fruitsToAdd, (accu, numFruit, fruit) => {
    accu[fruit] ? accu[fruit] += numFruit : accu[fruit] = numFruit
    return allFruits
  }, allFruits)
)
