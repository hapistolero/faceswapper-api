const PostPhoto = require('../../domain/faceSwapResults/entities/postPhoto')

class DofaceSwapUseCase{
    constructor({faceSwapResultRepository}){
        this._faceSwapResultRepository = faceSwapResultRepository
    }

    async execute(useCasePayload){
        
        try {
            console.log(useCasePayload)
        const postPhoto = new PostPhoto(useCasePayload)
        console.log(postPhoto)
            const url = await this._faceSwapResultRepository.swapPhoto(postPhoto.source, postPhoto.target);
            console.log('URL from swapPhoto:', url);
            return url;
        } catch (error) {
            console.error('Error in execute:', error);
            throw error;
        }
        
    }
}

module.exports = DofaceSwapUseCase