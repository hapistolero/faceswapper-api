const InvariantError = require('./InvariantError')

const DomainErrorTranslator ={
    translate(error){
        return DomainErrorTranslator._directories[error.message] || error
    }
    
}

DomainErrorTranslator._directories ={
    'POST_PHOTO.NOT_CONTAIN_NEEDED_PROPERTY' : new InvariantError('tidak dapat melakukan faceswap karena salah satu masukan kosong'),
    'POST_PHOTO.NOT_MEET_DATATYPE_SPECIFICATION': new InvariantError('tidak dapat melakukan faceswap karena tipe data salah')
}

module.exports = DomainErrorTranslator