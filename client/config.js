// Webpack should inject environment variables as globals at build time.
// This is less than ideal so config.js is to consolidate that and make
// it easier to understand when referencing it later.

const config = {
  environment: ENVIRONMENT || 'yo mamma'
}

export default config
