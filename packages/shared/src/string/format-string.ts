// import {repeat, replace} from 'lodash'
const { repeat, replace } = require('lodash')

const repeatString = (value, times) => repeat(value, times)
const replaceString = (original, oldValue, newValue) => replace(original, oldValue, newValue)

module.exports = {
  repeatString,
  replaceString
}
