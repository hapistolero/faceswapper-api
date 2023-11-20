class PostPhoto{
    constructor(payload){
        this._verifyPayload(payload)
        this.source = payload.source
        this.target = payload.target
    }

    _verifyPayload(payload){
        const {source, target}=payload

        if(!source || !target){
            throw new Error('POST_PHOTO.NOT_CONTAIN_NEEDED_PROPERTY')
        }

        if(typeof source  !== 'string' || typeof target !== 'string'){
            throw new Error('POST_PHOTO.NOT_MEET_DATATYPE_SPECIFICATION')
        }



    }
}

module.exports =PostPhoto