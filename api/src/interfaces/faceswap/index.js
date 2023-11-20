const FaceSwapHandler = require('./handler');
const routes= require('./routes')

module.exports = {
    name:'faceswap',
    version:'1.0.0',
    register:async(server,{container})=>{
        const faceSwapHandler = new FaceSwapHandler(container)
        server.route(routes(faceSwapHandler))
    }
}
