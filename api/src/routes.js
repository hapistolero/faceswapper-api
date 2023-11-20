
const {
    faceSwapHandler
  } = require('./handler')
  
  const routes = [
    {
      method: 'POST',
      path: '/faceswap',
      handler: faceSwapHandler,
      options: {
        cors: {
          origin: ['*']
        }
      }
    },
  
  ]
  
  module.exports = routes
  