const DofaceSwapUseCase = require('../../application/use_case/doFaceSwap')

class FaceSwapHandler{
    constructor(container){
        this._container = container

        this.postPhotoHandler = this.postPhotoHandler.bind(this)
    }

    async postPhotoHandler(request,h){

        const {source,target} = request.payload

        console.log(source, target)

        const dofaceSwapUseCase = this._container.getInstance(DofaceSwapUseCase.name)
            console.log(DofaceSwapUseCase)
        const faceSwapResult = await dofaceSwapUseCase.execute({
            source, target
        })

        const response = h.response({
            status:'success',
            data:{
              faceSwapResult
            }
        })

        response.code(201)
        return response
    }

}

module.exports = FaceSwapHandler