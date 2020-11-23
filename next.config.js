require('dotenv').config()

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? '/visualize-8-queen-next' : ''
}
