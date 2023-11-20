const DomainErrorTranslator = require('../DomainErrorTranslator')
const InvariantError = require('../InvariantError')

describe('DomainErrorTranslator',()=>{
    it('should translate error correctly',()=>{
        expect(DomainErrorTranslator.translate(new Error('POST_PHOTO.NOT_CONTAIN_NEEDED_PROPERTY')))
        .toStrictEqual(new InvariantError('tidak dapat melakukan faceswap karena salah satu masukan kosong'))
        expect(DomainErrorTranslator.translate(new Error('POST_PHOTO.NOT_MEET_DATATYPE_SPECIFICATION')))
        .toStrictEqual(new InvariantError('tidak dapat melakukan faceswap karena tipe data salah'))
    })
})