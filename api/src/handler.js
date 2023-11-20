const { spawn } = require('child_process');

const faceSwapHandler = async (request, h) => {
    const { source, target } = request.payload;

    if (!source || !target) {
        const notFoundResponse = h.response({
            message: 'source dan target tidak boleh kosong!'
        }).code(400);
        return notFoundResponse;
    }

    const outputName = `./storage/${Math.random()}.jpeg`;

    try {
        await new Promise((resolve, reject) => {
            const pythonProcess = spawn('python', ['C:/Users/hafiz ilham ardana/Documents/programing/roop/roop/run.py', '-s', `${source}`, '-t', `${target}`, '-o', outputName]);

            pythonProcess.stdout.on('data', (data) => {
                console.log(`Python script output: ${data}`);
            });

            pythonProcess.stderr.on('data', (data) => {
                console.error(`Error from Python script: ${data}`);
            });

            pythonProcess.on('close', (code) => {
                if (code === 0) {
                    console.log('Face swap completed successfully');
                    resolve();
                } else {
                    console.error(`Python script process exited with code ${code}`);
                    reject('Gagal melakukan faceswap');
                }
            });
        }).then(()=>
        {
            const response = h.response({
                message: 'Face swap berhasil',
                result: outputName
            });
            return response;
        }
        ).catch((err)=>{
            console.log(err.message)
            const errorResponse = h.response({
                error: err || 'Gagal melakukan faceswap'
            }).code(500); // Set appropriate HTTP error code
            return errorResponse;
        });
        
        console.log(err.message)
        const errorResponse = h.response({
            error: err || 'Gagal melakukan faceswap'
        }).code(500); // Set appropriate HTTP error code
        return errorResponse;

        
        
    } catch (error) {
        const errorResponse = h.response({
            error: error || 'Gagal melakukan faceswap'
        }).code(500); // Set appropriate HTTP error code
        return errorResponse;
    }
};

module.exports = { faceSwapHandler };
