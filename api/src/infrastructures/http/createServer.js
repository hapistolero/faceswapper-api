const Hapi = require('@hapi/hapi')
const ClientError = require('../../common/exceptions/ClientError')
const DomainErrorTranslator = require('../../common/exceptions/DomainErrorTranslator')
const FaceSwapResult = require('../../interfaces/faceswap')

// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: 'localhost',
//     routes: {
//       cors: {
//         origin: ['*']
//       }
//     }
//   })

//   server.route(routes)

//   await server.start()
//   console.log(`server berjalan pada ${server.info.uri}`)
// }

// init()


const createServer = async (container)=>{
  const server = Hapi.server({
    host:'localhost',
    port:'5000'
  })
  
  await server.register([
    {
      plugin:FaceSwapResult,
      options:{container}
      
    }
  ])

  server.ext('onPreResponse',(request,h)=>{
    const response = request

    if(response instanceof Error){

      const translatedError = DomainErrorTranslator.translate(response)

      if(translatedError instanceof ClientError){
        const newResponse = h.response({
          status:'fail',
          message:translatedError.message
        })
        newResponse.code(translatedError.statusCode)
        return newResponse
      }

      if(!translatedError.isServer){
        return h.continue
      }

      const newResponse = h.response({
        status:'error',
        message:'terjadi kegagalan pada server'
      })
      newResponse.code(500)

      return newResponse
    }
    return h.continue
  })
  return server
}

module.exports = createServer