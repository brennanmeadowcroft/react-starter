function stringify (config) {
  const keys = Object.keys(config)

  keys.forEach(k => {
    config[k] = `'${config[k]}'`
  })

  console.log('stringed', config)

  return config
}

module.exports = stringify

