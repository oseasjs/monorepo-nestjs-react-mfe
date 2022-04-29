const moment = require('moment')

const formatDate = date => moment(date).format()
const dateNow = () => moment().format()

module.exports = {
  formatDate,
  dateNow
}
