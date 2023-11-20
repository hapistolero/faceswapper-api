const FaceSwapResultRepository = require('../faceSwapResultRepository')

describe('FaceSwapResult Interface',()=>{
    it('should throw error when invoke abstact behavior', async ()=>{

        await expect(FaceSwapResultRepository.swapPhoto({}).rejects.toThrowError('FACESWAPRESULT.METHOD_NOT_IMPLEMENTED'))
    })
})