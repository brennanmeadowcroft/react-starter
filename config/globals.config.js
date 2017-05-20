// stringify is required because webpack needs variables to be a string value
// as it does a lookup against environment variables
const stringify = require('../utils/stringifyConfig')

const config = {
  ENVIRONMENT: process.env.NODE_ENV
}

module.exports = stringify(config)

