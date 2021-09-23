const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module (e.g next-i18next)
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
}
