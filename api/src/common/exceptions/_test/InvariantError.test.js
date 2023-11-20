const ClientError = require('../ClientError')
const InvariantError = require('../InvariantError')

describe('InvariantError',()=>{
    it('should create error correctly',()=>{
        const invariantError = new InvariantError('error com')

        expect(invariantError).toBeInstanceOf(InvariantError)
        expect(invariantError).toBeInstanceOf(ClientError)
        expect(invariantError).toBeInstanceOf(Error)

        expect(invariantError.statusCode).toEqual(400)
        expect(invariant.message).toEqual('error com')
        expect(invariantError.name).toEqual('InvariantError')
    })
})