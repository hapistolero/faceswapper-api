const routes = (handler)=>[
    {
        method:'POST',
        path:'/faceswap',
        handler:handler.postPhotoHandler
    }
]

module.exports = routes