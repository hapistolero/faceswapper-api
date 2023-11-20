const  {createContainer}= require('instances-container')

const { spawn } = require('child_process');
const path = require('path');


const FaceSwapResultRepository = require('../domain/faceSwapResults/faceSwapResultRepository')
const FaceSwapResultRepositoryPython = require('../infrastructures/repository/FaceSwapResultRepositoryPython')
const DofaceSwapUseCase = require('../application/use_case/doFaceSwap')

const container = createContainer();

container.register([
    {
        key:FaceSwapResultRepository.name,
        Class: FaceSwapResultRepositoryPython,
        parameter:{
            dependencies:[
                {
                    concrete:path
                },
                {
                    concrete:spawn
                }
            ]
        }
    }
])

container.register([
    {
        key:DofaceSwapUseCase.name,
        Class:DofaceSwapUseCase,
        parameter:{
            injectType:'destructuring',
            dependencies:[
                {
                    name:'faceSwapResultRepository',
                    internal:FaceSwapResultRepository.name
                }
            ]
        }
    }
])

module.exports = container