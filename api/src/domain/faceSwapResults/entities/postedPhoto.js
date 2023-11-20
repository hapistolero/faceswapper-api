class PostedPhoto{
    constructor(payload){
        console.log(payload)
        this._verifyPayload(payload)
        

        this.result = payload.result
    }

    _verifyPayload(payload){
        const {result} = payload 

        if(!result){
            throw new Error('POSTED_PHOTO.METHOD_NOT_IMPLEMENTED')
        }

        if(typeof result !=='string'){
            throw new Error('POSTED_PHOTO.NOT_MEET_DATATYPE_SPECIFICATION')
        }
        
    }
}

module.exports = PostedPhoto