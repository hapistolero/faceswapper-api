const FaceSwapResultRepository = require('../../domain/faceSwapResults/faceSwapResultRepository')
const PostedPhoto = require('../../domain/faceSwapResults/entities/postedPhoto')

class FaceSwapResultRepositoryPython extends FaceSwapResultRepository{

    constructor(path,spawn){
        super()
        this._spawn = spawn
        this._path = path

        this._scriptPath = this._path.join(__dirname, '../../../../roop/run.py');
        this._outputName =this._path.join(__dirname,`../storage/${Math.random()}.jpeg`);


    }

    async swapPhoto(source,target){
        let postedPhoto
        const result = await new Promise((resolve, reject) => {
            const result = this._outputName
            const pythonProcess = this._spawn('python', [this._scriptPath, '-s', `${source}`, '-t', `${target}`, '-o', this._outputName]);

            pythonProcess.stdout.on('data', (data) => {
                console.log(`Python script output: ${data}`);
            });

            pythonProcess.stderr.on('data', (data) => {
                console.error(`Error from Python script: ${data}`);
            });

            pythonProcess.on('close', (code) => {
                if (code === 0) {
                    console.log('Face swap completed successfully');    
                    console.log(result)

                    const payload = {
                        result
                    }
                    postedPhoto = new PostedPhoto(payload);
                    console.log(postedPhoto)
                    resolve(postedPhoto.result);
                } else {
                    console.error(`Python script process exited with code ${code}`);
                    reject('Gagal melakukan faceswap1');
                }
            });
        });

        return result
    }
}

module.exports = FaceSwapResultRepositoryPython